defmodule ElixirMeetupApi.Agenda.Inscricao do
  use Ecto.Schema
  import Ecto.Changeset

  schema "inscricoes" do
    field :nome, :string
    field :email, :string
    field :telefone, :string
    field :tipo_participacao, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(inscricao, attrs) do
    inscricao
    |> cast(attrs, [:nome, :email, :telefone, :tipo_participacao])
    |> validate_required([:nome, :email, :telefone, :tipo_participacao])
  end
end
