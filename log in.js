
        function validation() {
            var role = document.getElementById("role").value;
            if (role === "admin") {
                window.location.href = "Home.html?role=admin";
            } else if (role === "user") {
                window.location.href = "Home.html?role=user";
            }
            return false;
        }



    