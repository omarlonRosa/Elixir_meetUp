defmodule ElixirMeetupApiWeb.Router do
  use ElixirMeetupApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ElixirMeetupApiWeb do
    pipe_through :api

    post "/inscricoes", InscricaoController, :create

    get "/inscricoes/:email", InscricaoController, :show 

    get "/inscricoes", InscricaoController, :index

  end
  
  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:elixir_meetup_api, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      live_dashboard "/dashboard", metrics: ElixirMeetupApiWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
