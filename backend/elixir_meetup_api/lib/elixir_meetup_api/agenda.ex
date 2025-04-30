defmodule ElixirMeetupApi.Agenda do
  @moduledoc """
  The Agenda context.
  """

  import Ecto.Query, warn: false
  alias ElixirMeetupApi.Repo

  alias ElixirMeetupApi.Agenda.Inscricao

  @doc """
  Returns the list of inscricoes.

  ## Examples

      iex> list_inscricoes()
      [%Inscricao{}, ...]

  """
  def list_inscricoes do
    Repo.all(Inscricao)
  end

  @doc """
  Gets a single inscricao.

  Raises `Ecto.NoResultsError` if the Inscricao does not exist.

  ## Examples

      iex> get_inscricao!(123)
      %Inscricao{}

      iex> get_inscricao!(456)
      ** (Ecto.NoResultsError)

  """
  def get_inscricao!(id), do: Repo.get!(Inscricao, id)

  @doc """
  Creates a inscricao.

  ## Examples

      iex> create_inscricao(%{field: value})
      {:ok, %Inscricao{}}

      iex> create_inscricao(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_inscricao(attrs \\ %{}) do
    %Inscricao{}
    |> Inscricao.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a inscricao.

  ## Examples

      iex> update_inscricao(inscricao, %{field: new_value})
      {:ok, %Inscricao{}}

      iex> update_inscricao(inscricao, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_inscricao(%Inscricao{} = inscricao, attrs) do
    inscricao
    |> Inscricao.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a inscricao.

  ## Examples

      iex> delete_inscricao(inscricao)
      {:ok, %Inscricao{}}

      iex> delete_inscricao(inscricao)
      {:error, %Ecto.Changeset{}}

  """
  def delete_inscricao(%Inscricao{} = inscricao) do
    Repo.delete(inscricao)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking inscricao changes.

  ## Examples

      iex> change_inscricao(inscricao)
      %Ecto.Changeset{data: %Inscricao{}}

  """
  def change_inscricao(%Inscricao{} = inscricao, attrs \\ %{}) do
    Inscricao.changeset(inscricao, attrs)
  end
end
