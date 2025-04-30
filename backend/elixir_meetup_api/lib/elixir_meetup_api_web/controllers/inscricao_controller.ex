defmodule ElixirMeetupApiWeb.InscricaoController do
  use ElixirMeetupApiWeb, :controller

  alias ElixirMeetupApi.{Repo, Inscricao}

  # GET /api/inscricoes
  def index(conn, _params) do
    inscricoes = Repo.all(Inscricao)
    json(conn, inscricoes)
  end

  # POST /api/inscricoes
  def create(conn, %{"nome" => nome, "email" => email, "telefone" => telefone, "modalidade" => modalidade}) do
    changeset = Inscricao.changeset(%Inscricao{}, %{nome: nome, email: email, telefone: telefone, modalidade: modalidade})

    case Repo.insert(changeset) do
      {:ok, inscricao} ->
        conn
        |> put_status(:created)
        |> json(inscricao)

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(%{errors: changeset})
    end
  end

  # GET /api/inscricoes/:email
  def show(conn, %{"email" => email}) do
    inscricao = Repo.get_by(Inscricao, email: email)

    case inscricao do
      nil ->
        conn
        |> put_status(:not_found)
        |> json(%{error: "Inscrição não encontrada"})

      inscricao ->
        conn
        |> put_status(:ok)
        |> json(inscricao)
    end
  end
end

