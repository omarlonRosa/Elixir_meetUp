defmodule ElixirMeetupApi.Inscricao do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:id, :nome, :email, :telefone, :modalidade, :inserted_at]}

  schema "inscricoes" do
    field :nome, :string
    field :email, :string
    field :telefone, :string
    field :modalidade, :string

    timestamps()
  end

  def changeset(inscricao, attrs) do
    inscricao
    |> cast(attrs, [:nome, :email, :telefone, :modalidade])
    |> validate_required([:nome, :email, :telefone, :modalidade])
  end
end

