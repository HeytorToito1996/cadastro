import flet as ft
import requests

def main(page: ft.Page):
    page.title = "Tela de Cadastro"
    page.window_width = 400
    page.window_height = 500
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    
    usuario = ft.TextField(
        label="Usuário",
        width=300,
        border_radius=10
    )
    
    email = ft.TextField(
        label="e-Mail",
        width=300,
        border_radius=10
    )
    
    senha = ft.TextField(
        label="Senha",
        password=True,
        can_reveal_password=True,
        width=300,
        border_radius=10
    )
    
    mensagem = ft.Text("")
    
    def cadastrar(e):
        requests.post("http://localhost:3000/api/",
                      json={
                         "usuario":usuario.value,
                         "email":email.value,
                         "senha":senha.value                        
                      })
        
        print({
          "usuario":usuario.value,
          "email":email.value,
          "senha":senha.value,
        })
    
    mensagem.value = "Cadastro Realizado com sucesso!" 
    
    usuario.value = ""
    email.value = ""
    senha.value = ""
    
    page.update()
    
    #Layout
    page.add(
        ft.Container(
            content=ft.Column(
                [
                    ft.Text("Cadastro",size=28,weight=ft.FontWeight.BOLD),
                    usuario,email,senha,
                    ft.ElevatedButton("Cadastrar",width=300,on_click=cadastrar),
                    mensagem
                ],
                horizontal_alignment = ft.CrossAxisAlignment.CENTER,
                spacing=20
            ),
            padding=30,
            border_radius=15,
        )
    )
    
ft.app(target=main)       