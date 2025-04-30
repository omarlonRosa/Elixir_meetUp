defmodule ElixirMeetupApi.AgendaTest do
  use ElixirMeetupApi.DataCase

  alias ElixirMeetupApi.Agenda

  describe "inscricoes" do
    alias ElixirMeetupApi.Agenda.Inscricao

    import ElixirMeetupApi.AgendaFixtures

    @invalid_attrs %{nome: nil, email: nil, telefone: nil, tipo_participacao: nil}

    test "list_inscricoes/0 returns all inscricoes" do
      inscricao = inscricao_fixture()
      assert Agenda.list_inscricoes() == [inscricao]
    end

    test "get_inscricao!/1 returns the inscricao with given id" do
      inscricao = inscricao_fixture()
      assert Agenda.get_inscricao!(inscricao.id) == inscricao
    end

    test "create_inscricao/1 with valid data creates a inscricao" do
      valid_attrs = %{nome: "some nome", email: "some email", telefone: "some telefone", tipo_participacao: "some tipo_participacao"}

      assert {:ok, %Inscricao{} = inscricao} = Agenda.create_inscricao(valid_attrs)
      assert inscricao.nome == "some nome"
      assert inscricao.email == "some email"
      assert inscricao.telefone == "some telefone"
      assert inscricao.tipo_participacao == "some tipo_participacao"
    end

    test "create_inscricao/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Agenda.create_inscricao(@invalid_attrs)
    end

    test "update_inscricao/2 with valid data updates the inscricao" do
      inscricao = inscricao_fixture()
      update_attrs = %{nome: "some updated nome", email: "some updated email", telefone: "some updated telefone", tipo_participacao: "some updated tipo_participacao"}

      assert {:ok, %Inscricao{} = inscricao} = Agenda.update_inscricao(inscricao, update_attrs)
      assert inscricao.nome == "some updated nome"
      assert inscricao.email == "some updated email"
      assert inscricao.telefone == "some updated telefone"
      assert inscricao.tipo_participacao == "some updated tipo_participacao"
    end

    test "update_inscricao/2 with invalid data returns error changeset" do
      inscricao = inscricao_fixture()
      assert {:error, %Ecto.Changeset{}} = Agenda.update_inscricao(inscricao, @invalid_attrs)
      assert inscricao == Agenda.get_inscricao!(inscricao.id)
    end

    test "delete_inscricao/1 deletes the inscricao" do
      inscricao = inscricao_fixture()
      assert {:ok, %Inscricao{}} = Agenda.delete_inscricao(inscricao)
      assert_raise Ecto.NoResultsError, fn -> Agenda.get_inscricao!(inscricao.id) end
    end

    test "change_inscricao/1 returns a inscricao changeset" do
      inscricao = inscricao_fixture()
      assert %Ecto.Changeset{} = Agenda.change_inscricao(inscricao)
    end
  end
end
