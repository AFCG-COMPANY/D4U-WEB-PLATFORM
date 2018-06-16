from nameko.rpc import rpc

class EmailService:
    name = "greeting_service"

    @rpc
    def hello(self, email, text):
        import smtplib
        server = smtplib.SMTP('smtp.gmail.com', 587)

        #Next, log in to the server
        server.login("youremailusername", "password")

        #Send the mail
        server.sendmail("you@gmail.com", email, text)
        return "ok"