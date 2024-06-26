---
title: Testing in the Node
image: img/thumbnail.png
sidebar_label: Testing in the Node
---

# **Testing Your Task with Easy Testing**

Congratulations on completing the basic Jest tests and unit tests! This shows that your task is functioning correctly. Next, you will learn how to use our custom-designed **Easy Testing v0.1** to simulate how your task operates on other users' Koii Nodes.

## **Process Overview**

Here's a step-by-step guide to using Easy Testing:

### Step 1: Set up .env (optional)

To configure your environment, follow the steps below. These will guide you on how to set up your own `.env` file. You can do this by renaming and modifying the existing `.env.example` file with your specific configuration values OR simply creating your own `.env`.

Rename the file `.env.example` to `.env`. This change allows the application to recognize and use this file for environment variables. Make the `TASK_ID` to be the latest one we provided below. The `TASK_ID` will help the debugger program to find the corresponding JavaScript folder, and replace the JavaScript file to your project.

Remember also include your own environmental variables, such as `Spheron_Storage` and other keys that you used in your project.

```jsx
TASK_ID = "3sFhZoxfze7RQJqMGSR3L3gtg8AeiYZ6D42QwFc3nuEV";
```

Here's an example of using task extension variables in the your `.env`:

```jsx
TASK_ID = "3sFhZoxfze7RQJqMGSR3L3gtg8AeiYZ6D42QwFc3nuEV";
TWITTER_USERNAME = "testuser123";
```
:::danger
To deploy your task, please use yarn webpack again to avoid leaking your environmental variables.
:::
### **Step 2: Modify Your Code**

Insert testing scripts of your code into the task script and use **`console.log("TEST",value)`** to output important values for testing. For example, in `submission.js` you can add:

```jsx
...
console.log('ROUND', round);
const value = 'Hello, World!';
console.log("TEST", value); // <--- Add this here!
if (value) {
  await namespaceWrapper.storeSet('value', value);
}
...
```

This setup enables our program to capture logs related to testing and provide you with feedback during the execution.

### **Step 3: Monitor and Push Updates**

Run the following command to monitor your code changes in real-time and push the latest updates to the Task folder:

```jsx
npm run prod-debug
```

This command facilitates continuous monitoring and updating, ensuring that any changes you make are immediately reflected and tested.

### **Step 4: Run the Testing Task**

Run your testing task with the task ID above in Desktop node.

---

Now, you should be able to observe the output in your task.

## Build Your Own Testing Task

The easy testing task we provided does not include audit and distribution functions and features a very short round time. Therefore, if you wish to test longer tasks and explore the distribution and audit functionalities, you are encouraged to create your own task. Creating your own task allows you to directly have access to the associated `config-task.yml` which holds information on round times, bounties, and stakes. For security reasons, you aren't able to customize those aspects of the easy testing task but you're able to do so with your own task!

## Filtering Logs w/ Keywords

You’ve now successfully debugged the Easy Testing task in real time directly on Koii Node! Next, you’ll see you can easily filter logs with specific keywords!

### **Step 1: Navigate to debugger.js**

To configure specific keyword filters for live debugging, first find debugger.js, which contains the following code:

```jsx
class Debugger {

  static taskID =
    process.env.TASK_ID || '3sFhZoxfze7RQJqMGSR3L3gtg8AeiYZ6D42QwFc3nuEV';
  static webpackedFilePath = process.env.WEBPACKED_FILE_PATH || 'dist/main.js';
  static keywords = process.env.TEST_KEYWORDS || ['TEST'];
  static nodeDir = process.env.NODE_DIR || '';
}
```

### Step 2: Configure specific keywords

Debugger.js contains all the different variables required to facilitate the live debugging process possible! As you can see in the list of keywords to filter by, the default is ‘TEST’. You modify and add as many filters as you choose to, with an example shown below:

```jsx
  static keywords = ['TEST', 'ERROR', 'WARNING'];
```

As simple as that, you’re now successfully able to filter your logs by a number of keywords in real time!
