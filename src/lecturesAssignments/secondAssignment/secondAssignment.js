
const users = [
    {
      name: "Candace Johnson",
      custom: {
        title: "Concierge Specialist",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/vg9hyrdUSLW3XokioDeq",
      id: "user.agent.a44e6b5b-5a02-458b-9c6b-d184d3145d47"
    },
    {
      name: "Mark Tzang",
      custom: {
        title: "Sales Associate",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/RMF3UYD0SlqJkzAypbCu",
      id: "user.agent.75dcdd9a-a632-46ae-8beb-c3f2095962c9"
    },
    {
      name: "Sara Conner",
      custom: {
        title: "Concierge Specialist",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/IMd517xxTiu6S8xqnOop",
      id: "user.agent.b832ec9e-9766-443e-974b-fd745872191f"
    },
    {
      name: "Mylie Tshu",
      custom: {
        title: "Sales Associate",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/WzPo3zJ6QnenW2j8l9rv",
      id: "user.agent.d624d60f-e8bf-492a-a4ec-cea90131441e"
    },
    {
      name: "Beverly Jackson",
      custom: {
        title: "Concierge Specialist",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/zhT9pK8BT639OEkXhr0A",
      id: "user.agent.97ee2fd3-b19c-44c6-a2aa-c7f9c07b511d"
    },
    {
      name: "Anshul Gupta",
      custom: {
        title: "Sales Associate",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/plxXsXhQkOti1HLftBh4",
      id: "user.agent.100bb019-c8ed-488f-8509-abacdf065f6a"
    },
    {
      name: "Brian Ramsey",
      custom: {
        title: "Sales Associate",
        role: "agent"
      },
      profileUrl: "https://cdn.filestackcontent.com/l7pU9u75Te6E54c4NIJK",
      id: "user.agent.a6d3ca3a-a85d-456e-9cf3-b357f4640c22"
    },
  
    {
      name: "John Markley",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/RMF3UYD0SlqJkzAypbCu",
      id: "user.consumer.56992e82-135c-4ff8-af39-8969782a9f64"
    },
    {
      name: "Amanda Smith",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/tHhKbndeSymR0QIpc1pr",
      id: "user.consumer.10effbe7-3b52-45fc-bddf-bd4e8254f182"
    },
    {
      name: "Rianna Jones",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/Y55MfdJfSdaTzosoLaMc",
      id: "user.consumer.768d15d0-3f55-44df-89ca-e1c4ba8c2f8a"
    },
    {
      name: "Anika Agarwal",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/cN8aodqR5yBMSPGEEM0Q",
      id: "user.consumer.f53fee76-11c6-427c-98fe-915608400d37"
    },
    {
      name: "Segey Ivanov",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/A9MvlsEKQOOaxRVY92qa",
      id: "user.consumer.465d9ad0-3ff6-4018-a778-50ec0e85e5da"
    },
    {
      name: "Tom Watson",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/DKd7OR35TKK79fKJACKw",
      id: "user.consumer.d0a82244-7c38-40dc-8416-43f02f0074e0"
    },
    {
      name: "Paul Ransom",
      custom: {
        title: "TA User",
        role: "consumer"
      },
      profileUrl: "https://cdn.filestackcontent.com/ifHXO5YwRpOpXt993ZNF",
      id: "user.consumer.3cc12741-8c82-47bc-b693-0ec5111dfcb6"
    },
  
    {
      name: "Josh Allen",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/zcmz4sSum1c4y6wqC1RQ",
      id: "user.advisor.8dfdf582-6dd8-457a-9fcc-8b1f903ec15a"
    },
    {
      name: "Helen Cook",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/H1YmRQd6w2D8cdSvlTQ5",
      id: "user.advisor.5eb5ce55-48ca-4462-b7d7-633457612e19"
    },
    {
      name: "Avi Cohen",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/MVeirH82R6OTtUYX9tK9",
      id: "user.advisor.4ea8196e-c5e0-4a2f-91b6-5108a530edb8"
    },
    {
      name: "Pat Wang",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/pHjIo1WsRn20AzgsNZSq",
      id: "user.advisor.a75fa1df-8940-48cd-af63-e68cc5629340"
    },
    {
      name: "Evan Hansen",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/DP6NAHZFTASyuOkgqCxi",
      id: "user.advisor.70fcce65-1e22-431a-a804-a688dba0d75d"
    },
    {
      name: "Jessica Rand",
      custom: {
        title: "TA Advisor",
        role: "advisor"
      },
      profileUrl: "https://cdn.filestackcontent.com/qxUx0y9TIO2FedHlbDu1",
      id: "user.advisor.207980e9-baa3-4643-b7b9-ad9aeba957b4"
    }
  ];
  
  const rooms = [
    {
      name: "Rollover from employer",
      description:
        "I just joined as a new employee and need to rollover my old 401k to my employer 401k",
      id: "room.consumer.20effbe7-3b52-45fc-bddf-bd4e8254f189",
      custom: {
        room_current_status: "open",
        room_consumer_name: "John Markley",
        room_consumer_id: "user.consumer.56992e82-135c-4ff8-af39-8969782a9f64",
        room_owner_name: "John Markley",
        room_owner_id: "user.consumer.56992e82-135c-4ff8-af39-8969782a9f64",
        room_owner_role: "consumer",
        room_creator_name: "John Markley",
        room_creator_id: "user.consumer.56992e82-135c-4ff8-af39-8969782a9f64",
        room_creator_role: "consumer",
        room_created_at: "2021-06-24T12:00:00Z",
        room_last_updated_at: "2021-07-24T12:00:00Z",
        room_created_source: "zingly",
        room_created_device: "web",
        room_crm_type: "salesforce",
        room_crm_external_id: "",
        room_agent1_assigned_to_id:
          "user.agent.a44e6b5b-5a02-458b-9c6b-d184d3145d47",
        room_agent1_assigned_to_name: "Candace Johnson",
        room_handle: "room_consumer_20effbe7-3b52-45fc-bddf-bd4e8254f189",
        room_zing_temperature: "1",
        room_severity: "URGENT",
        room_priority: "1",
        room_sla_hours: "24",
        room_is_hidden: "false"
      }
    },
    {
      name: "Cashout retirement plan",
      description:
        "I need cash. Can someone help me with cashing out options for the retirement plan?",
      id: "room.consumer.9ca91dab-3189-4dd2-8a61-960c77a46749",
      custom: {
        room_current_status: "open",
        room_consumer_name: "John Markley",
        room_consumer_id: "user.consumer.56992e82-135c-4ff8-af39-8969782a9f64",
        room_owner_name: "John Markley",
        room_owner_id: "user.consumer.56992e82-135c-4ff8-af39-8969782a9f64",
        room_owner_role: "consumer",
        room_creator_name: "John Markley",
        room_creator_id: "user.consumer.56992e82-135c-4ff8-af39-8969782a9f64",
        room_creator_role: "consumer",
        room_created_at: "2021-06-24T12:00:00Z",
        room_last_updated_at: "2021-06-24T12:00:00Z",
        room_created_source: "zingly",
        room_created_device: "web",
        room_crm_type: "salesforce",
        room_crm_external_id: "",
        room_agent1_assigned_to_id:
          "user.agent.a44e6b5b-5a02-458b-9c6b-d184d3145d47",
        room_agent1_assigned_to_name: "Candace Johnson",
        room_handle: "room_consumer_9ca91dab-3189-4dd2-8a61-960c77a46749",
        room_zing_temperature: "2",
        room_severity: "URGENT",
        room_priority: "1",
        room_sla_hours: "24",
        room_is_hidden: "false"
      }
    },
    {
      name: "Rollover plan",
      description:
        "I don't like withdrawal penalties and taxes. Can someone help me with understanding roll over options?",
      id: "room.consumer.ebc3ab04-5458-4acc-b780-517283ee756d",
      custom: {
        room_current_status: "open",
        room_consumer_name: "Amanda Smith",
        room_consumer_id: "user.consumer.10effbe7-3b52-45fc-bddf-bd4e8254f182",
        room_owner_name: "Amanda Smith",
        room_owner_id: "user.consumer.10effbe7-3b52-45fc-bddf-bd4e8254f182",
        room_owner_role: "consumer",
        room_creator_name: "Amanda Smith",
        room_creator_id: "user.consumer.10effbe7-3b52-45fc-bddf-bd4e8254f182",
        room_creator_role: "consumer",
        room_created_at: "2021-06-25T17:30:00Z",
        room_last_updated_at: "2021-06-25T17:30:00Z",
        room_created_source: "zingly",
        room_created_device: "web",
        room_crm_type: "salesforce",
        room_crm_external_id: "",
        room_agent1_assigned_to_id:
          "user.agent.75dcdd9a-a632-46ae-8beb-c3f2095962c9",
        room_agent1_assigned_to_name: "Mark Tzang",
        room_handle: "room_consumer_ebc3ab04-5458-4acc-b780-517283ee756d",
        room_zing_temperature: "3",
        room_severity: "MEDIUM",
        room_priority: "1",
        room_sla_hours: "24",
        room_is_hidden: "false"
      }
    },
    {
      name: "No Withdrawal",
      description:
        "I like my investment gains in my account to remain tax-deferred. I need more info to explore this. Can someone assist me?",
      id: "room.consumer.f70ed26e-c009-4490-a835-48040c2233ef",
      custom: {
        room_current_status: "open",
        room_consumer_name: "Amanda Smith",
        room_consumer_id: "user.consumer.10effbe7-3b52-45fc-bddf-bd4e8254f182",
        room_owner_name: "Amanda Smith",
        room_owner_id: "user.consumer.10effbe7-3b52-45fc-bddf-bd4e8254f182",
        room_owner_role: "consumer",
        room_creator_name: "Amanda Smith",
        room_creator_id: "user.consumer.10effbe7-3b52-45fc-bddf-bd4e8254f182",
        room_creator_role: "consumer",
        room_created_at: "2021-06-24T08:40:00Z",
        room_last_updated_at: "2021-06-24T08:40:00Z",
        room_created_source: "zingly",
        room_created_device: "web",
        room_crm_type: "salesforce",
        room_crm_external_id: "",
        room_agent1_assigned_to_id:
          "user.agent.a44e6b5b-5a02-458b-9c6b-d184d3145d47",
        room_agent1_assigned_to_name: "Candace Johnson",
        room_handle: "room_consumer_f70ed26e-c009-4490-a835-48040c2233ef",
        room_zing_temperature: "1",
        room_severity: "MEDIUM",
        room_priority: "1",
        room_sla_hours: "24",
        room_is_hidden: "false"
      }
    },
    {
      name: "Roll to IRA",
      description:
        "I need to discuss investment strategy and retirement planning questions. Need help with this?",
      id: "room.consumer.8acf0e11-aa37-4cc8-900e-93fc905d051f",
      custom: {
        room_current_status: "closed",
        room_consumer_name: "Amanda Smith",
        room_consumer_id: "user.consumer.10effbe7-3b52-45fc-bddf-bd4e8254f182",
        room_owner_name: "Candace Johnson",
        room_owner_id: "user.agent.a44e6b5b-5a02-458b-9c6b-d184d3145d47",
        room_owner_role: "agent",
        room_creator_name: "Candace Johnson",
        room_creator_id: "user.agent.a44e6b5b-5a02-458b-9c6b-d184d3145d47",
        room_creator_role: "agent",
        room_created_at: "2021-06-23T08:30:00Z",
        room_last_updated_at: "2021-07-23T08:30:00Z",
        room_created_source: "zingly",
        room_created_device: "web",
        room_crm_type: "salesforce",
        room_crm_external_id: "",
        room_agent1_assigned_to_id:
          "user.agent.a44e6b5b-5a02-458b-9c6b-d184d3145d47",
        room_agent1_assigned_to_name: "Candace Johnson",
        room_handle: "room_agent_8acf0e11-aa37-4cc8-900e-93fc905d051f",
        room_zing_temperature: "4",
        room_severity: "MEDIUM",
        room_priority: "1",
        room_sla_hours: "24",
        room_is_hidden: "false"
      }
    },
    {
      name: "Agent Presence Room",
      description: "Room to know which agents are online for a given brand",
      id: "room.bot.99999999-9999-9999-9999-agent9999999",
      custom: {
        room_current_status: "open",
        room_consumer_name: "ZingBot",
        room_consumer_id: "user.bot.9dfdf582-6dd8-457a-9fcc-8b1f903ec15a",
        room_owner_name: "ZingBot",
        room_owner_id: "user.bot.9dfdf582-6dd8-457a-9fcc-8b1f903ec15a",
        room_owner_role: "bot",
        room_creator_name: "ZingBot",
        room_creator_id: "user.bot.9dfdf582-6dd8-457a-9fcc-8b1f903ec15a",
        room_creator_role: "bot",
        room_created_at: "2021-06-24T12:00:00Z",
        room_last_updated_at: "2021-07-24T12:00:00Z",
        room_created_source: "zingly",
        room_created_device: "web",
        room_crm_type: "",
        room_crm_external_id: "",
        room_agent1_assigned_to_id: "",
        room_agent1_assigned_to_name: "",
        room_handle: "room_bot_99999999-9999-9999-9999-agent9999999",
        room_zing_temperature: "1",
        room_severity: "URGENT",
        room_priority: "1",
        room_sla_hours: "24",
        room_is_hidden: "true"
      }
    },
    {
      name: "Advisor Presence Room",
      description: "Room to know which advisors are online for a given brand",
      id: "room.bot.99999999-9999-9999-9999-advisor999999",
      custom: {
        room_current_status: "open",
        room_consumer_name: "ZingBot",
        room_consumer_id: "user.bot.9dfdf582-6dd8-457a-9fcc-8b1f903ec15a",
        room_owner_name: "ZingBot",
        room_owner_id: "user.bot.9dfdf582-6dd8-457a-9fcc-8b1f903ec15a",
        room_owner_role: "bot",
        room_creator_name: "ZingBot",
        room_creator_id: "user.bot.9dfdf582-6dd8-457a-9fcc-8b1f903ec15a",
        room_creator_role: "bot",
        room_created_at: "2021-06-24T12:00:00Z",
        room_last_updated_at: "2021-07-24T12:00:00Z",
        room_created_source: "zingly",
        room_created_device: "web",
        room_crm_type: "",
        room_crm_external_id: "",
        room_agent1_assigned_to_id: "",
        room_agent1_assigned_to_name: "",
        room_handle: "room_bot_99999999-9999-9999-9999-advisor999999",
        room_zing_temperature: "1",
        room_severity: "URGENT",
        room_priority: "1",
        room_sla_hours: "24",
        room_is_hidden: "true"
      }
    }
  ];
  
// Task 01: Create another user object with the same propertiesas provided in the dataset and insert it into the end of the array

console.log("////////////////////////////////////////////////////// Task One //////////////////////////////////////////////////////");
const taskOneUser = {
  name: "Hassan Qayyum",
  custom: {
    title: "Assignment Task One",
    role: "SQAE"
  },
  profileUrl: "Task One URL",
  id: "Task One id"
};
users.push(taskOneUser);
console.log(users);


// Task 02: Create another user and insert it into a random indexin the users array using splice() method

console.log("////////////////////////////////////////////////////// Task Two //////////////////////////////////////////////////////");

const taskTwoUser = {
  name: "Hassan Qayyum",
  custom: {
    title: "Assignment Task Two",
    role: "SQAE"
  },
  profileUrl: "Task Two URL",
  id: "Task Two id"
};

users.splice(-2,1,taskTwoUser); // removing second last object and adding taskTwoUser object in that index.

console.log(users);


// Task 03: Create a new array from users and select only users from 2nd index to 5th index.

console.log("////////////////////////////////////////////////////// Task Three //////////////////////////////////////////////////////");

let taskThreeUser = users.filter((user,index)=> index>1 && index<=5);
console.log(taskThreeUser);

// or 

let taskThreUser = users.slice(2,6);
console.log(taskThreUser);



// Task 04: Loop over users and print the user role. You have to use traditional for loop, then for-of loop and then at last, forEach for this purpose.


console.log("////////////////////////////////////////////////////// Task Four //////////////////////////////////////////////////////");

// Traditional for loop

console.log("/////////////// Traditional for loop ////////////////////");



for (let i=0; i<users.length; i++){ //20
  console.log("Traditional For Loop: ",users[i]['custom']['role']);
}

// for-of

console.log("////////////////////// for of loop //////////////////////");

for(let user of users){
  console.log("for-of loop: ", user['custom']['role']);
}

// forEach

console.log("////////////////////// forEach /////////////////////////");

users.forEach((user,index)=>{
  console.log("forEach: ",user['custom']['role']);
})



/* Task 05: Loop over the array, and return a new array which should contain only the id of the users. Store this new array in a variable called userIds.
Result:[{ id: ‘wewewe’ }, { id: ‘wewewew’ }, ] */

console.log("////////////////////////////////////////////////////// Task Five //////////////////////////////////////////////////////");


const userIds = users.map(user=> { return{'id:': user.id}});
console.log(userIds);




/*
Task 06:
We want to find all the rooms of a user named Amanda Smith.
●First, find the user in users with the name  Amanda Smith, you will find the id
of the user.
●Then, filter all the rooms for which room.custom.room_creator_id is
equal to the id of Amanda Smith. */

console.log("////////////////////////////////////////////////////// Task Six //////////////////////////////////////////////////////");

// First find user Amanda Smith

let findingAmandaSmith = users.find((user=> user.name == "Amanda Smith"));
console.log(findingAmandaSmith.id);

// Second filter all the rooms for which room.custom.room_creator_id is equal to Amanda Smith

let findingAmandaSmithRooms = rooms.filter((room,index)=> room['custom']['room_creator_id']==findingAmandaSmith.id);
console.log (findingAmandaSmithRooms);
// console.log(findingAmandaSmithRooms);
