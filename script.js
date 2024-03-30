function submitForm() {
	const name = document.getElementById("name");
	const email = document.getElementById("email");
	const message = document.getElementById("message");

	if (name.value === "" || email.value === "" || message.value === "") {
		alert("Please fill in all fields.");
		return;
	}

	const formData = new FormData();
	formData.append("name", name.value);
	formData.append("email", email.value);
	formData.append("message", message.value);

	fetch("send-email.php", {
		method: "POST",
		body: formData
	})
	.then(response => response.text())
	.then(data => {
		if (data === "Email sent successfully.") {
			alert(data);
			name.value = "";
			email.value = "";
			message.value = "";
		} else {
			alert("Error: " + data);
		}
	});
}
