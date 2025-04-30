defmodule ElixirMeetupApi.AgendaFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `ElixirMeetupApi.Agenda` context.
  """

  @doc """
  Generate a inscricao.
  """
  def inscricao_fixture(attrs \\ %{}) do
    {:ok, inscricao} =
      attrs
      |> Enum.into(%{
        email: "some email",
        nome: "some nome",
        telefone: "some telefone",
        tipo_participacao: "some tipo_participacao"
      })
      |> ElixirMeetupApi.Agenda.create_inscricao()

    inscricao
  end
end
