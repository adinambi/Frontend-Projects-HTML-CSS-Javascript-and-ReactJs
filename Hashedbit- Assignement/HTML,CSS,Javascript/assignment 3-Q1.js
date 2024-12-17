// Create array of Indian states
const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

// Filter out states starting with vowels
const filteredStates = indianStates.filter(state => {
    // Convert first letter to lowercase to check for vowels
    const firstLetter = state[0].toLowerCase();
    // Check if first letter is not a vowel
    return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
});

console.log("States not starting with vowels:");
console.log(filteredStates);