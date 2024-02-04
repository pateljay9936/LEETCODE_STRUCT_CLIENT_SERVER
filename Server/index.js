const { auth } = require('./middleware');
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';
const cors = require('cors');


app.use(cors()); 

const USERS = [];
let USER_ID_COUNTER = 1;

const PROBLEMS = [
{
    problemId: "1",
    title: "Bitwise AND of Numbers Range", 
    difficulty: "Medium", 
    acceptance: "42%",
    description: "Given two integers left and right that repres",
    exampleIn1: "left = 5, right=7",
    exampleOut1: "4",
    exampleIn2: "left = 3, right=4",
    exampleOut2: "1",
    exampleIn3: "left = 4, right=7",
    exampleOut3: "5",
},
{
    problemId: "2",
    title: "Reverse Integer",
    difficulty: "Easy",
    acceptance: "35%",
    description: "Given a 32-bit signed integer, reverse digits of an integer.",
    exampleIn1: "x = 123",
    exampleOut1: "321",
    exampleIn2: "x = -456",
    exampleOut2: "-654",
    exampleIn3: "x = 0",
    exampleOut3: "0",
},
{
    problemId: "3",
    title: "Sample Problem",
    difficulty: "Easy",
    acceptance: "50%",
    description: "Given two integers left and right, find the sum of all numbers between them.",
    exampleIn1: "left = 10, right=15",
    exampleOut1: "75",
    exampleIn2: "left = -5, right=5",
    exampleOut2: "0",
    exampleIn3: "left = 1, right=1",
    exampleOut3: "1",
},
{
    problemId: "4",
    title: "New Problem 1",
    difficulty: "Medium",
    acceptance: "60%",
    description: "Description of new problem 1",
    exampleIn1: "input1",
    exampleOut1: "output1",
    exampleIn2: "input2",
    exampleOut2: "output2",
    exampleIn3: "input3",
    exampleOut3: "output3",
},
{
    problemId: "5",
    title: "New Problem 2",
    difficulty: "Hard",
    acceptance: "25%",
    description: "Description of new problem 2",
    exampleIn1: "input4",
    exampleOut1: "output4",
    exampleIn2: "input5",
    exampleOut2: "output5",
    exampleIn3: "input6",
    exampleOut3: "output6",
},
{
    problemId: "6",
    title: "New Problem 3",
    difficulty: "Easy",
    acceptance: "80%",
    description: "Description of new problem 3",
    exampleIn1: "input7",
    exampleOut1: "output7",
    exampleIn2: "input8",
    exampleOut2: "output8",
    exampleIn3: "input9",
    exampleOut3: "output9",
},
{
    problemId: "7",
    title: "New Problem 4",
    difficulty: "Medium",
    acceptance: "70%",
    description: "Description of new problem 4",
    exampleIn1: "input10",
    exampleOut1: "output10",
    exampleIn2: "input11",
    exampleOut2: "output11",
    exampleIn3: "input12",
    exampleOut3: "output12",
},
{
    problemId: "8",
    title: "New Problem 5",
    difficulty: "Hard",
    acceptance: "10%",
    description: "Description of new problem 5",
    exampleIn1: "input13",
    exampleOut1: "output13",
    exampleIn2: "input14",
    exampleOut2: "output14",
    exampleIn3: "input15",
    exampleOut3: "output15",
},
{
    problemId: "9",
    title: "New Problem 6",
    difficulty: "Easy",
    acceptance: "90%",
    description: "Description of new problem 6",
    exampleIn1: "input16",
    exampleOut1: "output16",
    exampleIn2: "input17",
    exampleOut2: "output17",
    exampleIn3: "input18",
    exampleOut3: "output18",
},
{
    problemId: "10",
    title: "New Problem 7",
    difficulty: "Medium",
    acceptance: "55%",
    description: "Description of new problem 7",
    exampleIn1: "input19",
    exampleOut1: "output19",
    exampleIn2: "input20",
    exampleOut2: "output20",
    exampleIn3: "input21",
    exampleOut3: "output21",
},
{
    problemId: "11",
    title: "New Problem 8",
    difficulty: "Hard",
    acceptance: "15%",
    description: "Description of new problem 8",
    exampleIn1: "input22",
    exampleOut1: "output22",
    exampleIn2: "input23",
    exampleOut2: "output23",
    exampleIn3: "input24",
    exampleOut3: "output24",
},
{
    problemId: "12",
    title: "New Problem 9",
    difficulty: "Easy",
    acceptance: "85%",
    description: "Description of new problem 9",
    exampleIn1: "input25",
    exampleOut1: "output25",
    exampleIn2: "input26",
    exampleOut2: "output26",
    exampleIn3: "input27",
    exampleOut3: "output27",
},
{
    problemId: "13",
    title: "New Problem 10",
    difficulty: "Medium",
    acceptance: "65%",
    description: "Description of new problem 10",
    exampleIn1: "input28",
    exampleOut1: "output28",
    exampleIn2: "input29",
    exampleOut2: "output29",
    exampleIn3: "input30",
    exampleOut3: "output30",
}
]

const SUBMISSIONS = [];
let SUBMISSION_ID_COUNTER = 1;

app.get('/', (req, res) => {
  res.json({ msg: "Hello World!" })
})

app.get('/problemset/all', (req, res) => {
    
    const FilterProblems = PROBLEMS.map(problem => ({
            problemId: problem.problemId,
            title: problem.title,
            difficulty: problem.difficulty,
            acceptance: problem.acceptance
        })
    );
    
    res.json({ problems:FilterProblems });
  });

app.get('/problem/:problemId', (req, res) => {
    const problemId = req.params.problemId;
    const problem = PROBLEMS.find(problem => problem.problemId === problemId);
    if (problem) {
        res.json(problem);
    } else {
        res.status(404).json({ msg: `Problem ${problemId} not found.` });
    }
}
);

app.get("/me", auth, (req, res) => {
    const user = USERS.find(x => x.id === req.userId);
    res.json({ username: user.username , id: user.id});
});


app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
    if(USERS.find(x => x.username === username)){
        return res.status(403).json({ msg: "Username already exists",username: username,password: password });
    }
    USERS.push({username, password, id: USER_ID_COUNTER++});
    
    res.json({ msg: "User created",username: username,password: password });
    
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = USERS.find(x => x.username === username && x.password === password);
    if (!user) {
        return res.status(403).json({ msg: "User not found" });
    }
   if (user.password !== password) {
        return res.status(401).json({ msg: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET , { expiresIn: '2h' });

    // Decode the token to get the expiration time
    const decodedToken = jwt.decode(token);
    const expirationTime = new Date(decodedToken.exp * 1000).toISOString();
    const currentTime = new Date().toISOString();
    
    res.json({ token, expirationTime, currentTime, username: user.username, password: user.password });
})


// {
//     "username":"username1@gmail.com",
//     "password":"password1"
// }
// example token: (b/c in every login we are creating a new token)
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiaWF0IjoxNzA2MDMzNjc1fQ._F5xvsyeNO2fG9hUb5nAHWRScReuhl7S57xASpG09u8"

app.post("/submission", auth, (req, res) => {
    const problemId = req.body.problemId;
    const isCorrect = Math.random() < 0.5;
    const submissions = req.body.submissions;
    const userId = req.userId;
    
    if(isCorrect){
        SUBMISSIONS.push({
                submissionId: SUBMISSION_ID_COUNTER++,
                problemId: problemId,
                submissions: submissions,
                isCorrect: isCorrect,
                userId: userId,
                Status: "Accepeted"
            });
            return res.json({  submissionId: SUBMISSION_ID_COUNTER,problemId: problemId,submissions: submissions,isCorrect: isCorrect,userId: req.userId,status: "Accepted" });
        }
    else{
        SUBMISSIONS.push({
                submissionId: SUBMISSION_ID_COUNTER++,
                problemId: problemId,
                submissions: submissions,
                isCorrect: isCorrect,
                userId: userId,
                Status: "Wrong Answer"
            });
            return res.json({ submissionId: SUBMISSION_ID_COUNTER,problemId: problemId,submissions: submissions,isCorrect: isCorrect,userId: req.userId,status: "Wrong Answer" });
    }
});

app.get("/submissions/:problemId", auth, (req, res) => {
    const problemId = req.params.problemId;

    console.log("Retrieving submissions for problemId:", problemId);

    const submissions = SUBMISSIONS.filter((x) => x.problemId === problemId && x.userId === req.userId);
    res.json({
        submissions,
    });
});




app.get("/currentUser", auth, (req, res) => {
    // Logic to fetch and return current user info
    // Replace the code below with your actual logic to fetch the user info
    
    const userId = req.userId;
        // Add more user info properties as needed
    res.json({
        userId
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
