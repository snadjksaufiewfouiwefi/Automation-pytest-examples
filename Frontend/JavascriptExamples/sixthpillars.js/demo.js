var obj = {
    name: "sanket",
    company: "google",
    display: () => {
        console.log(this.name, "works in", this.compony);

    } 
    }

    var obj2 = {
        name: "JD",
        company: "microsoft",
        display: () => {
            setTimeout(() =>  {
                console.log(this.name, "works in", this.company);

            }, 3000);
        }
    }

    var obj2 = {
        name: "sarthak",
        company: "phonepe",
        display: function () {
            console.log(this);
            setTimeout(() =>  {
                console.log(this.name, "works in", this.company);
            },3000);
        }
    }

    obj2.display();