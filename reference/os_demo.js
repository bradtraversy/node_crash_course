const os = require("os")

// Platform
console.log(os.platform())

// CPU Arch
console.log(os.arch())

// CPU Core Info
console.log(os.cpus())

// Free memory
const freeMemoryBytes = os.freemem()
// Convert bytes to gigabytes
const freeMemoryGB = freeMemoryBytes / 1024 / 1024 / 1024
console.log(`Free Memory: ${freeMemoryGB.toFixed(2)} GB`)

// Total memory
const totalMemoryBytes = os.totalmem()
// Convert bytes to gigabyte
const totalMemoryGB = totalMemoryBytes / 1024 / 1024 / 1024
console.log(`Total Memory: ${totalMemoryGB.toFixed(2)} GB`)

// Home dir
console.log(os.homedir())

// Uptime
const upTimeSec = os.uptime()
// Convert sec to hours
const upTimeHours = upTimeSec / 3600
console.log(`Uptime: ${upTimeHours.toFixed(2)} hours`) 

// Load average
console.log(os.loadavg())

// Network Interfaces
console.log(os.networkInterfaces())
