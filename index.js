var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var exam = [
    {
        ID: 1,
        studentID: 1,
        subjectsID: 1,
        examPoint: 10
    },
    {
        ID: 2,
        studentID: 1,
        subjectsID: 2,
        examPoint: 5
    }, {
        ID: 3,
        studentID: 2,
        subjectsID: 1,
        examPoint: 5
    },
    {
        ID: 4,
        studentID: 2,
        subjectsID: 2,
        examPoint: 10
    }
];
var student = [
    {
        ID: 1,
        Name: 'suchakhri',
        LastName: 'suwithinanthakit'
    },
    {
        ID: 2,
        Name: 'ploy',
        LastName: 'naphat'
    }
];
var studentWithExam = student.map(function (st) {
    var result = __assign({}, st);
    result.score = exam.filter(function (ex) { return ex.studentID === st.ID; });
    return result;
});
console.log(studentWithExam);
