defmodule ElixirMeetupApiWeb.InscricaoJSON do
  alias ElixirMeetupApi.Agenda.Inscricao

  @doc """
  Renders a list of inscricoes.
  """
  def index(%{inscricoes: inscricoes}) do
    %{data: for(inscricao <- inscricoes, do: data(inscricao))}
  end

  @doc """
  Renders a single inscricao.
  """
  def show(%{inscricao: inscricao}) do
    %{data: data(inscricao)}
  end

  defp data(%Inscricao{} = inscricao) do
    %{
      id: inscricao.id,
      nome: inscricao.nome,
      email: inscricao.email,
      telefone: inscricao.telefone,
      tipo_participacao: inscricao.tipo_participacao
    }
  end
end
