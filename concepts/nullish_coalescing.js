// 使用 || 
console.log(0 || "default");      // 输出: "default"
console.log('' || "default");     // 输出: "default"
console.log(false || "default");  // 输出: "default"

// 使用 ?? 
console.log(0 ?? "default");      // 输出: 0
console.log('' ?? "default");     // 输出: ''
console.log(false ?? "default");  // 输出: false
console.log(null ?? "default");   // 输出: "default"
console.log(undefined ?? "default"); // 输出: "default"
