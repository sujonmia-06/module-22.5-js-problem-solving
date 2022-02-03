/* ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */

let randomPeople = ['Aedan Warner', 'Robert Conley', 'Kyla Hurst', 'Frankie Kaiser', 'Kadence Reyes', 'Kaylin Patterson', 'Dayanara Lucero', 'Lia Long', 'Keira Cooley', 'Kody Pierce', 'Bryce Zimmerman', 'Courtney Jordan'];

function bestFriend(_names){
    let longestName = '';
    for (let name of randomPeople){
        if (name.length > longestName.length){
            longestName = name;
        }
    }
    return longestName;
}

let longestName = bestFriend(randomPeople);
console.log(`the longest name is "${longestName}"`);