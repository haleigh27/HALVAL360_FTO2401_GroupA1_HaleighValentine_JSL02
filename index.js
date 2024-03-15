const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️

// Function to add new fitness goals and remove completed ones
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    const goalItems = goalList.querySelectorAll('li'); // Selects all existing goals in 'goalList'.

    // Iterates through each existing goal and compares its text content with the new goal input value.
    for (let i = 0; i < goalItems.length; i++) {
        const specialChar = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g; // Defines special characters.
        const goalItemFormatted = goalItems[i].textContent.trim().toLowerCase().replace(specialChar, ''); // Removes blank space, converts letters to lower case and removes special characters.

        if (goalItemFormatted === goalInput.trim().toLowerCase().replace(specialChar, '')) {
            alert(`Goal already exists!`);
            return;
        }
    }

    // Adds 'goalInput' to 'goalList' if no duplicate is found.
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);

    //Event listener to remove goal on click.
    newGoal.addEventListener('click', () => {
        goalList.removeChild(newGoal);
    });
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = 'Updated workout progress...';
    document.querySelector('#calorieIntakeProgress').textContent = 'Updated calorie intake progress...';
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault();
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
