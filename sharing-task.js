/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"


// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.

function generateAttendeeBadge(name, role) {
    let capitalRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase(); // role.charAt(0) gets the first letter and .UpperCase() turns it to uppercase. role.slice(1) starts from position 1 of the string and .LowerCase() makes the rest of the role lowercase.
    return `Name: ${name}, Role: ${capitalRole}`;
}


console.log(generateAttendeeBadge("Ololade", "VIP")); // Name: Ololade, Role: Vip

// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.

function calculateEventCost(attendees, costPerAttendee) {
    let total = attendees * costPerAttendee;
    if (attendees > 100) {
        total *= 0.9;
    }
    return total;
}

console.log(calculateEventCost(125, 30)); // 125 * 30 = 3750 ... 10% off = 3375.
console.log(calculateEventCost(50, 30)); // 50 * 30 = 1500... attendee count is less than 100.


// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("ololade@gmail.com")); // true
console.log(isValidEmail("ololade.com")); // false
// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?
