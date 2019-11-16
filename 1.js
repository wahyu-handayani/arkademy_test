function data(){
    const obj={
        "name":"Wahyu",
        "age":22,
        "address":"Kota Malang",
        "hobbies":["bersepedah","mendengarkan musik"],
        "is_married": false,
        "list_school":"Universitas Brawijaya",
        "skills":[{"skill_name" : "python","level"  : "advanced"},
        {"skill_name" : "javascript","level"  : "advanced"},
        {"skill_name" : "matlab","level"  : "advanced"}],
        "interest_in_coding":true
    };
    return JSON.stringify(obj);
}
console.log(data());