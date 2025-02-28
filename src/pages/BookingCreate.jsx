// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";

// export default function BookingCreate() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     var data = {
//       email: email,
//       username: username,
//       password: password,
//       gender: gender,
//       age: age,
//       branchId: 1,
//       role: role,
//       fname: fname,
//       lname: lname,
//       avatar: avatar,
//     };
//     fetch("http://localhost:8000/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         alert(result["message"]);
//         if (result["message"] === "User registered successfully") {
//           window.location.href = "/admin/user";
//         }
//       });
//   };

//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [avatar, setAvatar] = useState("");
//   const [password, setPassword] = useState("");
//   const [gender, setGender] = useState("");
//   const [age, setAge] = useState(0);
//   const [role, setRole] = useState("");

//   return (
//     <Container sx={{ p: 2 }} maxWidth="sm">
//       <div>
//         <Typography component="h1" variant="h5">
//           สร้างการจอง
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container sx={{ pt: 2 }} spacing={2}>
//             {/* <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 onChange={(e) => setFname(e.target.value)}
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 onChange={(e) => setLname(e.target.value)}
//               />
//             </Grid> */}
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="userId"
//                 label="userId"
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="หมายเลขโต๊ะ"
//                 label="หมายเลขโต๊ะ"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="password"
//                 label="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="gender"
//                 label="Gender"
//                 onChange={(e) => setGender(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="age"
//                 label="Age"
//                 onChange={(e) => setAge(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="role"
//                 label="Role"
//                 onChange={(e) => setRole(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="avatar"
//                 label="Avatar"
//                 onChange={(e) => setAvatar(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//               >
//                 Create
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//     </Container>
//   );
// }
