console.log("Task 1")

console.log("How many times \"to\" is found in the following string");
console.log("We want to go to  Karachi");
var str="We want to go to Karachi";
matches= str.match(/to/gi).length;
console.log(matches)


console.log("Task 2");
var student = {
    name: "Farrukh Malik",
    sclass: "VI",
    rollno: "01"
}

var arr = [];

var objLength= Object.keys(student).length;



for(i=0; i<objLength; i++){

    arr[i] = Object.keys(student)[i];

}

console.log("The keys are "+arr)

console.log("Length of Object is= "+ objLength);


console.log("Roll no: "+student.rollno);    
delete student.rollno;
console.log("Deleted "+student.rollno);


console.log("Task 3")

var arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzala', age: 28}
    ]

arr[2].name="Saadiq";
arr[2].age="23";

console.log("After replacing ", arr[2]);

arr.push({name: 'Umair', age: '23'});

arr.shift();

for( i=0; i<arr.length; i++){

    arr[i].createdAt= new Date();

}

console.table(arr);


console.log("task 4");

var arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzala', age: 28}
    ]
var arr1= [];

for(i=0 ; i<arr.length; i++){

    if((arr[i].age>18 && arr[i].age<28) && (arr[i].name.match(/f/gi)!== null))
        
    arr1.push(arr[i].name);

}
console.log(arr1.toString());


console.log("task 5");
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
 ];
for (var i = 0; i < library.length; i++) {
    console.log(library[i].author + " " + library[i].title + " " + library[i].readingStatus);
}

console.log("task 6")

           
var students = [
    {
        _id: 'std1',
        name: 'Bill gates',
        age: '25'
    },
    {
        _id: 'std2',
        name: 'Steve jobs',
        age: '27'
    },
    {
        _id: 'std3',
        name: 'Mark Zukerberg',
        age: '65'
    }
];

var courses = [
    {
        name: 'maths',
        std_id: ['std3' , 'std1']
    },
    {
        name: 'Computer Science',
        std_id: ['std3' , 'std2']
    },
    {
        name: 'Commerce',
        std_id: ['std1']
    }
];
var results = []
    for(j=0; j<students.length; j++){
            
results.push(students[j].name,students[j]._id);
var cors=[];
for(i=0;i<courses.length;i++){
	if(courses[i].std_id.includes(students[j]._id)){
		cors.push(courses[i].name);
	}
}
results.push(cors);}
console.log(results);



console.log("Task 7")

var sum = function(arr) {
    if (arr.length == 1) {
      return arr[0];
    }
    else {
      return arr.pop() + sum(arr);
    }
  };
  
  console.log(sum([1,2,3,4,5,6]));





   