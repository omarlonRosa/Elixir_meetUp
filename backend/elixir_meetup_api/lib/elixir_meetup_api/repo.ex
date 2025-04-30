defmodule ElixirMeetupApi.Repo do
  use Ecto.Repo,
    otp_app: :elixir_meetup_api,
    adapter: Ecto.Adapters.Postgres
end
