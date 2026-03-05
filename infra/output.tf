output "server_ip" {
    value = aws_eip.main.public_ip
    description = "public ip of the server"
  
}

output "ssh_command" {
  value       = "ssh -i ~/.ssh/trackit-key.pem ubuntu@${aws_eip.main.public_ip}"
  description = "Command to SSH into the server"
}