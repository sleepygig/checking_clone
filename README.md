<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1>User Directory App</h1>
  <p>This is a simple <strong>User Directory App</strong> built with React Native, which fetches and displays user data from a remote API (<a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a>). The app allows users to view a list of users, view detailed information about a user, search/filter users by name, and sort the list by name or email.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>User List Screen:</strong> Displays a list of users fetched from the jsonplaceholder API. Each user entry includes their name, email, and a profile picture (using a placeholder image from <a href="https://picsum.photos">picsum.photos</a>).</li>
    <li><strong>User Details Screen:</strong> Displays detailed information about a selected user, including information like the user’s address, phone, and company details.</li>
    <li><strong>Search Bar:</strong> Allows users to search for a specific user by their name.</li>
    <li><strong>Sort Users:</strong> Users can sort the list by <em>name</em> or <em>email</em> in ascending or descending order.</li>
    <li><strong>Back Navigation:</strong> Includes a back button to return from the User Details screen to the User List screen.</li>
  </ul>

  <h2>How to Run the App</h2>

  <h3>Prerequisites:</h3>
  <ul>
    <li><strong>Node.js</strong>: Ensure Node.js is installed on your machine.</li>
    <li><strong>Expo CLI</strong>: Install Expo CLI globally using the following command:
      <pre><code>npm install -g expo-cli</code></pre>
    </li>
  </ul>

  <h3>Steps to Run the App:</h3>
  <ol>
    <li>Clone this repository:
      <pre><code>git clone https://github.com/yourusername/user-directory-app.git
cd user-directory-app</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Start the Expo project:
      <pre><code>expo start</code></pre>
    </li>
    <li>Use the Expo Go app on your Android or iOS device to scan the QR code and run the app.</li>
  </ol>

  <h2>Technologies Used</h2>
  <ul>
    <li><strong>React Native</strong>: For building the mobile app.</li>
    <li><strong>React Navigation</strong>: For navigation between screens.</li>
    <li><strong>Axios</strong>: For fetching data from the API.</li>
    <li><strong>React Native Picker</strong>: For sorting users.</li>
    <li><strong>React Context API</strong>: For managing global state (search and sort options).</li>
  </ul>

  <h2>Challenges Faced</h2>
  <ul>
    <li><strong>Handling Asynchronous Data Fetching:</strong> Managing the loading state while fetching data and ensuring that the UI is responsive was a challenge. Used <code>useEffect</code> and <code>useState</code> hooks effectively to manage API calls and the data flow.</li>
    <li><strong>Search and Sorting:</strong> Implementing the search bar functionality required careful handling of user input and filtering the data efficiently. Sorting the list dynamically by name or email required managing the sort state and updating the UI.</li>
    <li><strong>Navigation:</strong> Implementing back navigation from the User Details screen posed a small challenge with React Navigation but was resolved by setting up a stack navigator.</li>
  </ul>

  <h2>Future Improvements</h2>
  <ul>
    <li>Implement pagination or infinite scrolling for better performance with larger data sets.</li>
    <li>Add user authentication (for logged-in users) and allow saving favorite users.</li>
    <li>Improve the UI with additional styling and animations.</li>
  </ul>

  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>

</body>
</html>

