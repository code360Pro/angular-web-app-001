import ssl
import socket
import sys

hostname = 'code360pro.com'
port = 443

try:
    context = ssl.create_default_context()
    with socket.create_connection((hostname, port)) as sock:
        with context.wrap_socket(sock, server_hostname=hostname) as ssock:
            cert = ssock.getpeercert()
            subject = dict(x[0] for x in cert['subject'])
            issuer = dict(x[0] for x in cert['issuer'])
            print(f"Subject: {subject}")
            print(f"Issuer: {issuer}")
except Exception as e:
    print(f"Error: {e}")
