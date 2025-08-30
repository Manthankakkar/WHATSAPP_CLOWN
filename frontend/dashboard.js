

// // const token=localStorage.getItem("token")





// // window.addEventListener("load",async(e)=>{
    
// //     try{e.preventDefault()
// //         const res=await axios.get("http://localhost:3000/api/user/users")
// //         if (res.data.success){
// //             const users=res.data.users
// //             console.log(users)
// //             const section=document.getElementById("section")
// //             section.innerHTML=""
// //             users.forEach(u=>{
// //                 const p=document.createElement("p")
// //                 p.innerHTML=`${u.name}: joined`
// //                 p.style.color="blue"
// //                 section.appendChild(p)
                
// //             })
// //             loadmessages()
// // }


// //     }catch(err){
// //         const section=document.getElementById("section")
// //         const p=document.createElement("p")
// //         p.innerHTML=`${err.message}`
// //         p.style.color="red"
// //         section.appendChild(p)

// //     }
    
// // })


// // const button=document.getElementById("sendbutton")
// // button.addEventListener("click",async()=>{
// //     try{
        
// // const message=document.getElementById("message").value.trim()
// // if (!message){
// //     const successdiv=document.getElementById("successmessagediv")
// //     const p=document.createElement("p")
// //     p.innerHTML="message cant be empty"
// //     p.style.color="red"
// //     successdivdiv.appendChild(p)
// // }

// // const res=await axios.post("http://localhost:3000/api/message/createMessage",{message},{headers:{Authorization:`Bearer ${token}`}})
// // if (res.data.success){
// //     const div=document.getElementById("successmessagediv")
// //     div.innerHTML=""
// //     const p=document.createElement("p")
// //     p.innerHTML="message successfully sent "
// //     p.style.color="green"
// //     div.appendChild(p)

// // }
// //     }catch(err){
// //         console.log(err.message)
// //     }

// // })


// // async function loadmessages(){
// // try{
// //     const res=await axios.get("http://localhost:3000/api/message/getMessage",{headers:{Authorization:`Bearer ${token}`}})
// //     if (res.data.success){
// //         const div=document.getElementById("messagediv")
// //         div.innerHTML=""
// //         const messages=res.data.allmessages
// //         localStorage.setItem("messages", JSON.stringify(messages))
// //         messages.forEach(message=>{
// //             const p=document.createElement("p")
// //             p.innerHTML=`${message.User.name}--->${message.message}`
// //             p.style.color="black"
// //             div.appendChild(p)
// //         })
// //     }
// // }catch(err){console.log(err.message)}
// // }

// // setInterval(()=>{
// //     loadmessages()
// // },3000)



// const token = localStorage.getItem("token");

// window.addEventListener("load", async (e) => {
//     try {
//         e.preventDefault();
//         const res = await axios.get("http://localhost:3000/api/user/users");
//         if (res.data.success) {
//             const users = res.data.users;
//             const section = document.getElementById("section");
//             section.innerHTML = "";
//             users.forEach(u => {
//                 const p = document.createElement("p");
//                 p.innerHTML = `${u.name}: joined`;
//                 p.style.color = "blue";
//                 section.appendChild(p);
//             });

//             // load messages from localStorage first
//             // const saved = JSON.parse(localStorage.getItem("messages")) || [];
//             // if (saved.length > 0) {
//             //     renderMessages(saved);
//             // }

//             // then fetch new messages
//             // loadmessages();
//         }
//     } catch (err) {
//         const section = document.getElementById("section");
//         const p = document.createElement("p");
//         p.innerHTML = `${err.message}`;
//         p.style.color = "red";
//         section.appendChild(p);
//     }
// });

// // const button = document.getElementById("sendbutton");
// // button.addEventListener("click", async () => {
// //     try {
// //         const message = document.getElementById("message").value.trim();
// //         if (!message) {
// //             const successdiv = document.getElementById("successmessagediv");
// //             const p = document.createElement("p");
// //             p.innerHTML = "message cant be empty";
// //             p.style.color = "red";
// //             successdiv.appendChild(p);
// //             return;
// //         }

// //         const res = await axios.post(
// //             "http://localhost:3000/api/message/createMessage",
// //             { message },
// //             { headers: { Authorization: `Bearer ${token}` } }
// //         );

// //         if (res.data.success) {
// //             const div = document.getElementById("successmessagediv");
// //             div.innerHTML = "";
// //             const p = document.createElement("p");
// //             p.innerHTML = "message successfully sent ";
// //             p.style.color = "green";
// //             div.appendChild(p);

// //             // add sent message directly to UI + localStorage
// //             const saved = JSON.parse(localStorage.getItem("messages")) || [];
// //             saved.push(res.data.newMessage);
// //             localStorage.setItem("messages", JSON.stringify(saved));
// //             renderMessages(saved);
// //         }
// //     } catch (err) {
// //         console.log(err.message);
// //     }
// // });

// // function renderMessages(messages) {
// //     const div = document.getElementById("messagediv");
// //     div.innerHTML = "";
// //     messages.forEach(message => {
// //         console.log(message)
// //         const p = document.createElement("p");
// //         p.innerHTML = `${message.User?.name || "Unknown"} ---> ${message.message}`;
// //         p.style.color = "black";
// //         div.appendChild(p);
// //     });
// // }

// // async function loadmessages() {
// //     try {
// //         const saved = JSON.parse(localStorage.getItem("messages")) || [];
// //         const lastId = saved.length > 0 ? saved[saved.length - 1].id : 0;

// //         const res = await axios.get(
// //             `http://localhost:3000/api/message/getMessage?lastId=${lastId}`,
// //             { headers: { Authorization: `Bearer ${token}` } }
// //         );

// //         if (res.data.success) {
// //             const newMessages = res.data.allmessages;
// //             if (newMessages.length > 0) {
// //                 const updated = [...saved, ...newMessages];
// //                 localStorage.setItem("messages", JSON.stringify(updated));
// //                 renderMessages(updated);
// //             }
// //         }
// //     } catch (err) {
// //         console.log(err.message);
// //     }
// // }


// // setInterval(() => {
// //     loadmessages();
// // }, 3000);





// const API_BASE = "http://localhost:3000"; 

// let currentGroupId = null; 

// async function fetchGroups() {
//   try {
//     const res = await axios.get(`${API_BASE}/api/groups/my-groups`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });

//     const groups = res.data.groups;
//     const groupList = document.getElementById("groupList");
//     groupList.innerHTML = "";

//     groups.forEach(group => {
//       const li = document.createElement("li");
//       li.innerText = group.name;
//       li.style.cursor = "pointer";

//       // 👇 when you click a group, set currentGroupId and load messages
//       li.onclick = () => selectGroup(group.id, group.name);

//       groupList.appendChild(li);
//     });
//   } catch (err) {
//     console.error("Error fetching groups:", err);
//   }
// }

// // Create group
// async function createGroup() {
//   const groupName = document.getElementById("groupName").value;
//   if (!groupName) return alert("Enter group name");

//   try {
//     const res = await axios.post(
//       `${API_BASE}/api/groups/create`,
//       { name: groupName },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     if (res.data.success) {
//       alert("Group successfully created");
//       document.getElementById("groupName").value = "";
//       fetchGroups();
//     }
//   } catch (err) {
//     console.error("Error creating group:", err);
//   }
// }

// // Select a group
// function selectGroup(groupId, groupName) {
//   currentGroupId = groupId; // ✅ now global state is set
//   console.log("Selected group:", currentGroupId);

//   document.getElementById("currentGroupName").innerText = groupName;

//   loadGroupMessages(groupId, groupName);
//   loadGroupUsers(groupId)
// }

// // Load messages for a group
// async function loadGroupMessages(groupId, groupName) {
//   try {
//     const res = await axios.get(`${API_BASE}/api/groups/${groupId}/messages`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });

//     const messages = res.data.messages;
//     const messagesDiv = document.getElementById("messages");
//     messagesDiv.innerHTML = "";

//     messages.forEach(msg => {
//       const p = document.createElement("p");
//       p.innerText = `${msg.User?.name || "Unknown"}: ${msg.message}`;
//       messagesDiv.appendChild(p);
//     });
//   } catch (err) {
//     console.error("Error loading messages:", err);
//   }
// }

// // Send message to current group
// const groupmessagebutton = document.getElementById("groupmessagebutton");
// groupmessagebutton.addEventListener("click", async () => {
//   const message = document.getElementById("messageInput").value;

//   if (!currentGroupId || !message) {
//     return alert("Select a group and enter a message");
//   }

//   try {
//     await axios.post(
//       `${API_BASE}/api/groups/${currentGroupId}/send-messages`,
//       { message },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     document.getElementById("messageInput").value = "";

//     // reload messages for current group
//     loadGroupMessages(currentGroupId, document.getElementById("currentGroupName").innerText);
//   } catch (err) {
//     console.error("Error sending message:", err);
//   }
// });

// // Auto load groups on page load
// fetchGroups();



// window.addEventListener("load",async()=>{
//   try{
//     const allusers=document.getElementById("allusers")
//     const res=await axios.get("http://localhost:3000/api/user/users",{headers:{Authorization:`Bearer ${token}`}})
//     if (res.data.success){
//       const usersdiv=document.getElementById("usersdiv")
//       const users=res.data.users
//       users.forEach(u=>{
//         const p=document.createElement("p")
//         p.innerHTML=u.name
//         p.style.color="seagreen"
//         const adduserbutton=document.createElement("button")
//         adduserbutton.innerHTML=`add user to group`
//         adduserbutton.addEventListener("click",async()=>{
//           try {
//             // ✅ Replace with actual groupId from context (e.g. URL or state)
             
            
//             const response = await axios.post(
//               `http://localhost:3000/api/groups/${currentGroupId}/add-member`,
//               { userIdToAdd: u.id },   // pass the user id
//               { headers: { Authorization: `Bearer ${token}` } }
//             );

//             if (response.data.success) {
//               alert(`${u.name} added to group successfully ✅`);
//             }
//           } catch (err) {
//             console.error(err);
//             alert("Failed to add user ❌");
//           }
//         });

//         p.appendChild(adduserbutton);
//         usersdiv.appendChild(p);
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

       

// async function loadGroupUsers(groupId) {
//   try {
//     currentGroupId=groupId
//     const res = await axios.get(
//       `http://localhost:3000/api/groups/${currentGroupId}/users`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     if (res.data.success) {
//       const usersDiv = document.getElementById("groupUsers");
//       usersDiv.innerHTML = ""; // clear previous

//       res.data.members.forEach(m => {
//         const p = document.createElement("p");
//         p.textContent = `${m.User.name} (${m.role})`
//         if (m.role=="member"){
//         const btn = document.createElement("button");
//         btn.textContent = "Make Admin";
//         btn.onclick = () => makeAdmin(m.User.id);
//         p.appendChild(btn)};
//          const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     removeBtn.onclick = () => removeFromGroup(m.User.id);

//     p.appendChild(removeBtn);
    
//         usersDiv.appendChild(p);
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Failed to fetch group members ❌");
//   }
// }


// async function makeAdmin(userId) {
//     try {
//       await axios.post(
//         `http://localhost:3000/api/groups/${currentGroupId}/make-admin`,
//         { userIdToPromote: userId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("User promoted to admin!");
//     } catch (err) {
//       console.error(err);
//       alert("Error making user admin");
//     }
//   }


// const groupId = 1; // Replace with the group ID (maybe from URL or state)
   
//     // Search users
//     async function searchUsers() {
//       const query = document.getElementById("searchInput").value;
//       if (!query) return alert("Enter a name, email or phone");

//       try {
//         const res = await axios.get(`http://localhost:3000/api/groups/search-users?query=${query}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         const resultsDiv = document.getElementById("searchResults");
//         resultsDiv.innerHTML = "";

//         if (res.data.length === 0) {
//           resultsDiv.innerHTML = "<p>No users found</p>";
//           return;
//         }

//         res.data.forEach(user => {
//           const div = document.createElement("div");
//           div.innerHTML = `
//             <p>${user.name} (${user.email}, ${user.phonenumber}) 
//               <button onclick="addToGroup(${user.id})">Add</button>
//             </p>`;
//           resultsDiv.appendChild(div);
//         });
//       } catch (err) {
//         console.error(err);
//         alert("Error searching users");
//       }
//     }

//     // Add user to group
//     async function addToGroup(userId) {
//       try {
        
//         await axios.post(`http://localhost:3000/api/groups/${currentGroupId}/add-member`, {userIdToAdd: userId }, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         alert("User added successfully!");
//       } catch (err) {
//         console.error(err);
//         alert("Error adding user");
//       }
//     }



//     async function removeFromGroup(userId) {
//   try {
//     await axios.delete(
//       `http://localhost:3000/api/groups/${currentGroupId}/remove-member/${userId}`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     alert("User removed successfully!");
//   } catch (err) {
//     console.error(err);
//     alert("Error removing user");
//   }
// }




// ==================== CONFIG =====================
const API_BASE = "http://localhost:3000";
const token = localStorage.getItem("token");
let currentGroupId = null;





 async function fetchUsers() {
    try {
      const res = await axios.get("http://localhost:3000/api/user/users",{headers:{Authorization:`bearer ${token}`}}); // your backend getUsers API
      const users = res.data.users;

      const userListDiv = document.getElementById("user-list");
      userListDiv.innerHTML = "All Users"
      userListDiv.style.fontSize="15px"
      userListDiv.style.textAlign="center";

      users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
          <span>${user.name} (${user.email})</span>
          <button onclick="addToGroup(${user.id})" 
        style="background-color: #4CAF50; 
               color: white; 
               border: none; 
               padding: 8px 14px; 
               margin: 5px 0; 
               border-radius: 6px; 
               font-size: 12px; 
               cursor: pointer; 
               transition: background-color 0.3s ease;">
  Add to Group
</button>

        `;
        userListDiv.appendChild(userDiv);
      });
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  }

fetchUsers()

// ==================== FETCH GROUPS =====================
async function fetchGroups() {
  try {
    const res = await axios.get(`${API_BASE}/api/groups/my-groups`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const groups = res.data.groups;
    const groupList = document.getElementById("groupList");
    groupList.innerHTML = "";

    groups.forEach((group) => {
      const li = document.createElement("li");
      li.className =
        "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <span><i class="bi bi-people-fill text-primary"></i> ${group.name}</span>
      `;

      li.onclick = () => selectGroup(group.id, group.name);
      groupList.appendChild(li);
    });
  } catch (err) {
    console.error("Error fetching groups:", err);
  }
}

// ==================== CREATE GROUP =====================
async function createGroup() {
  const groupName = document.getElementById("groupName").value;
  if (!groupName) return alert("Enter group name");

  try {
    const res = await axios.post(
      `${API_BASE}/api/groups/create`,
      { name: groupName },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (res.data.success) {
      alert("✅ Group successfully created");
      document.getElementById("groupName").value = "";
      fetchGroups();
    }
  } catch (err) {
    console.error("Error creating group:", err);
  }
}

// ==================== SELECT GROUP =====================
function selectGroup(groupId, groupName) {
  currentGroupId = groupId;
  document.getElementById("currentGroupName").innerText = groupName;
  loadGroupMessages(groupId);
  loadGroupUsers(groupId);
}

// ==================== LOAD MESSAGES =====================
async function loadGroupMessages(groupId) {
  try {
    const res = await axios.get(`${API_BASE}/api/groups/${groupId}/messages`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const messages = res.data.messages;
    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = "";

    messages.forEach((msg) => {
      const bubble = document.createElement("div");
      bubble.className =
        "p-2 my-1 rounded shadow-sm w-fit";
      bubble.style.maxWidth = "70%";

      if (msg.User?.id === parseJwt(token).id) {
        bubble.classList.add("bg-primary", "text-white", "ms-auto");
      } else {
        bubble.classList.add("bg-light", "text-dark", "me-auto");
      }

      bubble.innerHTML = `<strong>${msg.User?.name || "Unknown"}</strong><br>${msg.message}`;
      messagesDiv.appendChild(bubble);
    });

    messagesDiv.scrollTop = messagesDiv.scrollHeight; // auto scroll
  } catch (err) {
    console.error("Error loading messages:", err);
  }
}

// ==================== SEND MESSAGE =====================
const groupmessagebutton = document.getElementById("groupmessagebutton");
groupmessagebutton.addEventListener("click", async () => {
  const message = document.getElementById("messageInput").value;
  if (!currentGroupId || !message) {
    return alert("⚠️ Select a group and enter a message");
  }

  try {
    await axios.post(
      `${API_BASE}/api/groups/${currentGroupId}/send-messages`,
      { message },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    document.getElementById("messageInput").value = "";
    loadGroupMessages(currentGroupId);
  } catch (err) {
    console.error("Error sending message:", err);
  }
});

// ==================== LOAD GROUP USERS =====================
async function loadGroupUsers(groupId) {
  try {
    const res = await axios.get(
      `${API_BASE}/api/groups/${groupId}/users`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (res.data.success) {
      const usersDiv = document.getElementById("groupUsers");
      usersDiv.innerHTML = "";

      res.data.members.forEach((m) => {
        const div = document.createElement("div");
        div.className =
          "d-flex justify-content-between align-items-center border-bottom py-2";

        div.innerHTML = `
          <span><i class="bi bi-person-circle"></i> ${m.User.name} <small class="text-muted">(${m.role})</small></span>
        `;

        const actions = document.createElement("div");

        if (m.role === "member") {
          const adminBtn = document.createElement("button");
          adminBtn.className = "btn btn-sm btn-outline-primary me-2";
          adminBtn.textContent = "Make Admin";
          adminBtn.onclick = () => makeAdmin(m.User.id);
          actions.appendChild(adminBtn);
        }

        const removeBtn = document.createElement("button");
        removeBtn.className = "btn btn-sm btn-outline-danger";
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeFromGroup(m.User.id);
        actions.appendChild(removeBtn);

        div.appendChild(actions);
        usersDiv.appendChild(div);
      });
    }
  } catch (err) {
    console.error(err);
    alert("❌ Failed to fetch group members");
  }
}

// ==================== ADMIN ACTIONS =====================
async function makeAdmin(userId) {
  try {
    await axios.post(
      `${API_BASE}/api/groups/${currentGroupId}/make-admin`,
      { userIdToPromote: userId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert("✅ User promoted to admin!");
    loadGroupUsers(currentGroupId);
  } catch (err) {
    console.error(err);
    alert("❌ Error making user admin");
  }
}

async function removeFromGroup(userId) {
  try {
    await axios.delete(
      `${API_BASE}/api/groups/${currentGroupId}/remove-member/${userId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert("✅ User removed!");
    loadGroupUsers(currentGroupId);
  } catch (err) {
    console.error(err);
    alert("❌ Error removing user");
  }
}

// ==================== SEARCH USERS =====================
async function searchUsers() {
  const query = document.getElementById("searchInput").value;
  if (!query) return alert("Enter a name, email or phone");

  try {
    const res = await axios.get(
      `${API_BASE}/api/groups/search-users?query=${query}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    if (res.data.length === 0) {
      resultsDiv.innerHTML = "<p class='text-muted'>No users found</p>";
      return;
    }

    res.data.forEach((user) => {
      const card = document.createElement("div");
      card.className =
        "card card-body mb-2 d-flex justify-content-between align-items-center flex-row";

      card.innerHTML = `
        <span><i class="bi bi-person-badge-fill"></i> ${user.name} (${user.email}, ${user.phonenumber})</span>
        <button class="btn btn-sm btn-success">Add</button>
      `;

      card.querySelector("button").onclick = () => addToGroup(user.id);
      resultsDiv.appendChild(card);
    });
  } catch (err) {
    console.error(err);
    alert("❌ Error searching users");
  }
}

// ==================== ADD USER TO GROUP =====================
async function addToGroup(userId) {
  try {
    await axios.post(
      `${API_BASE}/api/groups/${currentGroupId}/add-member`,
      { userIdToAdd: userId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert("✅ User added successfully!");
    loadGroupUsers(currentGroupId);
  } catch (err) {
    console.error(err);
    alert("❌ Error adding user");
  }
}

// ==================== AUTO LOAD =====================
fetchGroups();

// helper to decode token
function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return {};
  }
}





document.getElementById("leavegroup").addEventListener("click", () => {
  leaveGroup(currentGroupId);
});

document.getElementById("deletegroup").addEventListener("click", () => {
  deleteGroup(currentGroupId);
});

//leave and delete groups:

async function leaveGroup(groupId) {
  try {
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:3000/api/groups/leave", { groupId }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert("You left the group");
  } catch (err) {
    console.error(err);
  }
}

async function deleteGroup(groupId) {
  try {
    const token = localStorage.getItem("token");
    await axios.delete("http://localhost:3000/api/groups/delete", {
      headers: { Authorization:`Bearer ${token}` },
      data: { groupId }
    });
    alert("Group deleted successfully");
  } catch (err) {
    alert(err.message)
    console.error(err);
  }
}

const logout=document.getElementById("logout")
logout.addEventListener("click",()=>{
  localStorage.removeItem("token")
  window.location.href="login.html"
})
