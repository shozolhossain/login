document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var user_id = document.getElementById("user_id").value;
    var password = document.getElementById("password").value;

    var data = {
        user_id: user_id,
        password: password
    };

    fetch("https://script.google.com/macros/s/AKfycbyKFrYtl-_l2ZyxoZ-by80CMGq9o8-eL7kWKu7Ej81zfb1Um_NsPsBw2HXgRcoJaJPX/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                window.location.href = "dashboard.html";  // ড্যাশবোর্ড পেজে নিয়ে যায়
            } else {
                alert("Invalid Login");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
});
