defmodule ElixirMeetupApiWeb.InscricaoControllerTest do
  use ElixirMeetupApiWeb.ConnCase

  import ElixirMeetupApi.AgendaFixtures

  alias ElixirMeetupApi.Agenda.Inscricao

  @create_attrs %{
    nome: "some nome",
    email: "some email",
    telefone: "some telefone",
    tipo_participacao: "some tipo_participacao"
  }
  @update_attrs %{
    nome: "some updated nome",
    email: "some updated email",
    telefone: "some updated telefone",
    tipo_participacao: "some updated tipo_participacao"
  }
  @invalid_attrs %{nome: nil, email: nil, telefone: nil, tipo_participacao: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all inscricoes", %{conn: conn} do
      conn = get(conn, ~p"/api/inscricoes")
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create inscricao" do
    test "renders inscricao when data is valid", %{conn: conn} do
      conn = post(conn, ~p"/api/inscricoes", inscricao: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, ~p"/api/inscricoes/#{id}")

      assert %{
               "id" => ^id,
               "email" => "some email",
               "nome" => "some nome",
               "telefone" => "some telefone",
               "tipo_participacao" => "some tipo_participacao"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, ~p"/api/inscricoes", inscricao: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update inscricao" do
    setup [:create_inscricao]

    test "renders inscricao when data is valid", %{conn: conn, inscricao: %Inscricao{id: id} = inscricao} do
      conn = put(conn, ~p"/api/inscricoes/#{inscricao}", inscricao: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, ~p"/api/inscricoes/#{id}")

      assert %{
               "id" => ^id,
               "email" => "some updated email",
               "nome" => "some updated nome",
               "telefone" => "some updated telefone",
               "tipo_participacao" => "some updated tipo_participacao"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, inscricao: inscricao} do
      conn = put(conn, ~p"/api/inscricoes/#{inscricao}", inscricao: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete inscricao" do
    setup [:create_inscricao]

    test "deletes chosen inscricao", %{conn: conn, inscricao: inscricao} do
      conn = delete(conn, ~p"/api/inscricoes/#{inscricao}")
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, ~p"/api/inscricoes/#{inscricao}")
      end
    end
  end

  defp create_inscricao(_) do
    inscricao = inscricao_fixture()
    %{inscricao: inscricao}
  end
end
