//localStorage.clear()
const employee=
[
  {
    "id": 1,
    "email": "employee1@example.com",
    "firstname": "Shyam",
    "lastname": "Kumar",
    "password": "123",
    "tasks": {
      "values": {
        "task_title": "Update Website",
        "task_description": "Update the homepage with new branding.",
        "task_date": "2025-03-15",
        "task_category": "Web Development",
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      },
      "boolvalue": {
        "task_title": "Update Website",
        "task_description": "Update the homepage with new branding.",
        "task_date": "2025-03-15",
        "task_category": "Web Development",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    }
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "firstname": "Amit",
    "lastname": "Verma",
    "password": "123",
    "tasks": {
      "values": {
        "task_title": "Fix Bugs",
        "task_description": "Resolve the issues on the login page.",
        "task_date": "2025-03-14",
        "task_category": "Web Development",
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      },
      "boolvalue": {
        "task_title": "Fix Bugs",
        "task_description": "Resolve the issues on the login page.",
        "task_date": "2025-03-14",
        "task_category": "Web Development",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "firstname": "Ravi",
    "lastname": "Sharma",
    "password": "123",
    "tasks": {
      "values": {
        "task_title": "Design Logo",
        "task_description": "Create a new logo for the company.",
        "task_date": "2025-03-13",
        "task_category": "Design",
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      },
      "boolvalue": {
        "task_title": "Design Logo",
        "task_description": "Create a new logo for the company.",
        "task_date": "2025-03-13",
        "task_category": "Design",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "firstname": "Priya",
    "lastname": "Rani",
    "password": "123",
    "tasks": {
      "values": {
        "task_title": "Write Content",
        "task_description": "Write the content for the blog section.",
        "task_date": "2025-03-12",
        "task_category": "Content Writing",
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      },
      "boolvalue": {
        "task_title": "Write Content",
        "task_description": "Write the content for the blog section.",
        "task_date": "2025-03-12",
        "task_category": "Content Writing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "firstname": "Neha",
    "lastname": "Patel",
    "password": "123",
    "tasks": {
      "values": {
        "task_title": "Test Features",
        "task_description": "Test the newly implemented features.",
        "task_date": "2025-03-11",
        "task_category": "Quality Assurance",
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      },
      "boolvalue": {
        "task_title": "Test Features",
        "task_description": "Test the newly implemented features.",
        "task_date": "2025-03-11",
        "task_category": "Quality Assurance",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    }
  },
  {
    "id": 6,
    "email": "employee6@example.com",
    "firstname": "Suresh",
    "lastname": "Yadav",
    "password": "123",
    "tasks": {
      "values": {
        "task_title": "Deploy Application",
        "task_description": "Deploy the updated application on the server.",
        "task_date": "2025-03-10",
        "task_category": "DevOps",
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      },
      "boolvalue": {
        "task_title": "Deploy Application",
        "task_description": "Deploy the updated application on the server.",
        "task_date": "2025-03-10",
        "task_category": "DevOps",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    }
  },
  {
    "id": 7,
    "email": "employee7@example.com",
    "firstname": "Kavita",
    "lastname": "Singh",
    "password": "123",
    "tasks": {
      "values": {
        "task_title": "Create Database",
        "task_description": "Set up a new database for the project.",
        "task_date": "2025-03-09",
        "task_category": "Database Administration",
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      },
      "boolvalue": {
        "task_title": "Create Database",
        "task_description": "Set up a new database for the project.",
        "task_date": "2025-03-09",
        "task_category": "Database Administration",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    }
  },
  {
    "id": 8,
    "email": "employee8@example.com",
    "firstname": "Vikash",
    "lastname": "Thakur",
    "password": "123",
    "tasks": {
      "values": {
        "task_title": "Configure Server",
        "task_description": "Configure the server for new deployment.",
        "task_date": "2025-03-08",
        "task_category": "System Administration",
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      },
      "boolvalue": {
        "task_title": "Configure Server",
        "task_description": "Configure the server for new deployment.",
        "task_date": "2025-03-08",
        "task_category": "System Administration",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    }
  },
  {
    "id": 9,
    "email": "employee9@example.com",
    "firstname": "Manisha",
    "lastname": "Gupta",
    "password": "123",
    "tasks": {
      "values": {
        "task_title": "Manage Social Media",
        "task_description": "Update the company's social media accounts.",
        "task_date": "2025-03-07",
        "task_category": "Marketing",
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      },
      "boolvalue": {
        "task_title": "Manage Social Media",
        "task_description": "Update the company's social media accounts.",
        "task_date": "2025-03-07",
        "task_category": "Marketing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    }
  },
  {
    "id": 10,
    "email": "employee10@example.com",
    "firstname": "Renu",
    "lastname": "Verma",
    "password": "123",
    "tasks": {
      "values": {
        "task_title": "Prepare Presentation",
        "task_description": "Create a presentation for the upcoming meeting.",
        "task_date": "2025-03-06",
        "task_category": "Marketing",
        "active": 1,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      },
      "boolvalue": {
        "task_title": "Prepare Presentation",
        "task_description": "Create a presentation for the upcoming meeting.",
        "task_date": "2025-03-06",
        "task_category": "Marketing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    }
  }
]

  const admin=[{
    "id":1,
    "email":"admin1@example.com",
    "firstname":"Dharmendra",
    "lastname":"Patel",
    "password":123
  },
  {
    "id":2,
    "email":"admin2@example.com",
    "firstname":"Aditi",
    "lastname":"Patel",
    "password":123
  }
  ]
  export const SetlocalStorage=()=>{
    localStorage.setItem('employee',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const GetlocalStorage=()=>{
    const employee=JSON.parse(localStorage.getItem('employee'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return{employee,admin}
  }