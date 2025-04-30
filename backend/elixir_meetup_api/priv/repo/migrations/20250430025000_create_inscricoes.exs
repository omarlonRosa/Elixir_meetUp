defmodule ElixirMeetupApi.Repo.Migrations.AddModalidadeToInscricoes do
  use Ecto.Migration

  def change do
    alter table(:inscricoes) do
      add :modalidade, :string
    end
  end
end

