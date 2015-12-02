// TMServer.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

app.get('/', function(req, res) {
    res.render('ClientPhase/Dashboard/Dashboard');
});

//res.render for CurrentProjects
app.get('/Announcement', function(req, res) {
    res.render('ClientPhase/CurrentProjects/Announcement');
});
app.get('/NewBugs', function(req, res) {
    res.render('ClientPhase/CurrentProjects/NewBugs');
});
app.get('/AllBugs', function(req, res) {
    res.render('ClientPhase/CurrentProjects/AllBugs');
});
app.get('/Status', function(req, res) {
    res.render('ClientPhase/CurrentProjects/Status');
});
app.get('/ModifyingTestingDevice', function(req, res) {
    res.render('ClientPhase/CurrentProjects/ModifyingTestingDevice');
});
app.get('/ChangeDeadline', function(req, res) {
    res.render('ClientPhase/CurrentProjects/ChangeDeadline');
});
app.get('/ApproveRejectTesters', function(req, res) {
    res.render('ClientPhase/CurrentProjects/ApproveRejectTesters');
});
app.get('/MyTesters', function(req, res) {
    res.render('ClientPhase/CurrentProjects/MyTesters');
});

app.get('/HistoryProjects', function(req, res) {
    res.render('ClientPhase/HistoryProjects/HistoryProjects');
});


//res.render for Create Projects
app.get('/ProjectSpecific', function(req, res) {
    res.render('ClientPhase/CreateProject/ProjectSpecific');
});
app.get('/Devices', function(req, res) {
    res.render('ClientPhase/CreateProject/Devices');
});
app.get('/Expenditure', function(req, res) {
    res.render('ClientPhase/CreateProject/Expenditure');
});

//res.render for Payment
app.get('/OverviewClient', function(req, res) {
    res.render('ClientPhase/Payment/OverviewClient');
});
app.get('/Transactions', function(req, res) {
    res.render('ClientPhase/Payment/Transactions');
});


//Tester - Phase
app.get('/TesterPhase/Dashboard', function(req, res) {
    res.render('TesterPhase/Dashboard/Dashboard');
});
app.get('/TesterPhase/JoinedProjects', function(req, res) {
    res.render('TesterPhase/JoinedProjects/JoinedProjectList');
});
app.get('/TesterPhase/ProjectMan', function(req, res) {
    res.render('TesterPhase/JoinedProjects/ProjectMan');
});
app.get('/TesterPhase/Announcements', function(req, res) {
    res.render('TesterPhase/JoinedProjects/Announcements');
})
app.get('/TesterPhase/Bugs', function(req, res) {
    res.render('TesterPhase/JoinedProjects/Bugs');
})
app.get('/TesterPhase/DeviceManagement', function(req, res) {
    res.render('TesterPhase/DeviceManagement/DeviceManagement');
})
app.get('/TesterPhase/OverviewClient', function(req, res) {
    res.render('TesterPhase/Payment/OverviewClient');
})
app.get('/TesterPhase/Transactions', function(req, res) {
    res.render('TesterPhase/Payment/Transactions');
})

//Admin - Phase
app.get('/Admin/ApproveProject', function(req, res) {
    res.render('Admin/ApproveProject/ApproveProject');
})
app.get('/Admin/ApplicationFeedback', function(req, res) {
    res.render('Admin/ViewFeedback/ApplicationFeedback');
})
app.get('/Admin/ClientFeedback', function(req, res) {
    res.render('Admin/ViewFeedback/ClientFeedback');
})
app.get('/Admin/TesterFeedback', function(req, res) {
    res.render('Admin/ViewFeedback/TesterFeedback');
})
app.get('/Admin/AddAdmin', function(req, res) {
    res.render('Admin/AddAdmin/AddAdmin');
})
app.get('/Admin/ViewMember', function(req, res) {
    res.render('Admin/ViewMember/ViewMember');
})
app.get('/Admin/AddCoupan', function(req, res) {
    res.render('Admin/AddCoupan/AddCoupan');
})
app.get('/Admin/CreateClient', function(req, res) {
    res.render('Admin/CreateMulti/CreateClient');
})
app.get('/Admin/CreateTester', function(req, res) {
    res.render('Admin/CreateMulti/CreateTester');
})
app.get('/Admin/ConfirmMulti', function(req, res) {
    res.render('Admin/CreateMulti/ConfirmMulti');
})
app.get('/Admin/ManageUser', function(req, res) {
    res.render('Admin/ManageUser/BlockUnblockUser');
})

app.use(express.static(__dirname + '/public'));
app.listen(1926);
console.log('1926 is the magic port...Run http://localhost:1926/ on browser');