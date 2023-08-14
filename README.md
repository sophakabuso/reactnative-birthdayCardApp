# reactnative-birthdayCardApp.backgroundColor: backgroundColor: BirthdayCardApp.js:

This is the main entry point of the React Native application. It consists of the following sections:

State Management: Utilizes the useState hook to manage the greeting state, which holds the user's entered greeting message.

Event Handlers:

handleGreetingChange(text): Updates the greeting state when the user types in the input field.
handleClearPress(): Clears the greeting state when the "Clear" button is pressed.
Render:

Renders the components within a main container view with modern styling.
Displays a header text "Digital Birthday Card" with bold styling.
Includes a GreetingCard component to show the greeting message.
Embeds a GreetingInput component for the user to input their greeting message.
Features a ClearButton component to clear the entered message.
GreetingCard.js:

This component represents the visual display of the greeting message. It consists of the following elements:

A card container with modern styling, including a dark gray background with transparency.
The greeting message text, which is either the user's input or the default "Happy Birthday!" if no message is provided.
GreetingInput.js:

This component provides an input field for the user to type their greeting message. It includes:

A text input field with modern styling, featuring a dark border and light gray placeholder text.
The placeholder text "Enter your greeting message" to guide the user.
The value is controlled by the value prop, and changes are managed by the onChangeText function passed through props.
ClearButton.js:

This component represents a button to clear the entered greeting message. It includes:

A touchable opacity element styled with a vibrant gold background, dark red text, and a bold font.
The button displays the text "Clear" to indicate its purpose.
The onPress prop is used to trigger the clearing action when the button is pressed.
