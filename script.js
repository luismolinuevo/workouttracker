const workoutName = document.getElementById("workout-form");
let submitButton = document.getElementById("submit")

submitButton.addEventListener("click", function(e) {

    
    let workoutInput = document.getElementById("won")
    let repsInput = document.getElementById("rn")
    let workingsetInput = document.getElementById("wsn")
    let prInput = document.getElementById("max")

    let localItems = localStorage.getItem('workouts')

    if(localItems == null) {
        workouts = [];
    }

    else {
        workouts = JSON.parse(localItems)
    }

    let workoutObj = {
        won: workoutInput.value,
        repa: repsInput.value,
        wsa: workingsetInput.value,
        pra: prInput.value
    };

    workouts.push(workoutObj)
    localStorage.setItem('workouts', JSON.stringify(workouts));

    workoutInput.value = "";
    repsInput.value = "";
    workingsetInput.value = "";
    prInput.value = "";

    showWorkout();
})


function showWorkout() {
    let localItems = localStorage.getItem('workouts')

    if(localItems == null) {
        workouts = []
    }

    else {
        workouts = JSON.parse(localItems)
    }

    let html = "";
    workouts.forEach(function(element, index) {
        html += `<div class="items"><p>Workout name: ${element.won}</p><p>Sets X Reps: ${element.repa}</p><p>Working Set: ${element.wsa}</p><p>PR: ${element.pra}</p><button id="${index}"onclick="deleteNote(this.id)" class="btn">Delete Note</button><button id="${index}"onclick="editNote(this.id)" class="btn">Edit Note</button></div>`
    })

    let workoutContainer = document.getElementById("workoutscon");

    if(workouts != null) {
        workoutContainer.innerHTML = html;
    }

    else {
        workoutContainer.innerHTML = "No notes"
    }
    

}

function deleteNote(index) {
    //   console.log("I am deleting", index);
        let confirmDel = confirm("Delete this note?");
        if (confirmDel == true) {
            let localItems = localStorage.getItem('workouts');
            if (localItems == null) {
                workouts = [];
            } else {
                workouts = JSON.parse(localItems);
            }
    
            workouts.splice(index, 1);
            localStorage.setItem('workouts', JSON.stringify(workouts));
            showWorkout();
        }
}

function editNote(index) {
    let localItems = localStorage.getItem("workouts");
    
    let workoutInput = document.getElementById("won")
    let repsInput = document.getElementById("rn")
    let workingsetInput = document.getElementById("wsn")
    let prInput = document.getElementById("max")

    if (localItems == null) {
      workouts = [];
    } 
    
    else {
      workouts = JSON.parse(localItems);
    }

    console.log(workouts);

    workouts.findIndex((element, index) => {

      workoutInput.value = element.won;
      repsInput.value = element.repa;
      workingsetInput.value = element.wsa;
      prInput.value = element.pra;

    })
    
    workouts.splice(index, 1);
        localStorage.setItem("workouts", JSON.stringify(workouts));
        showWorkout();

        //You click edit it takes it away and then you just type in the form as normal but making sure to only change what you want to edit.
}

showWorkout();