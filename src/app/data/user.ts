
//     {
//       "name": "Alice Johnson",
//       "email": "alice.j@example.com",
//       "phone": "+1111111111",
//       "organization": "Tech Co",
//       "password": "hashedPassword1",
//       "role": "user"
//     },
//     {
//       "name": "Bob Smith",
//       "email": "bob.smith@example.com",
//       "phone": "+2222222222",
//       "organization": "Software Solutions",
//       "password": "hashedPassword2",
//       "role": "admin"
//     },
//     {
//       "name": "Charlie Brown",
//       "email": "charlie.b@example.com",
//       "phone": "+3333333333",
//       "organization": "Tech Innovators",
//       "password": "hashedPassword3",
//       "role": "user"
//     },
//     {
//       "name": "David Williams",
//       "email": "david.w@example.com",
//       "phone": "+4444444444",
//       "organization": "Digital Enterprises",
//       "password": "hashedPassword4",
//       "role": "user"
//     },
//     {
//       "name": "Eva Davis",
//       "email": "eva.d@example.com",
//       "phone": "+5555555555",
//       "organization": "Web Wizards",
//       "password": "hashedPassword5",
//       "role": "admin"
//     },
//     {
//       "name": "Frank Miller",
//       "email": "frank.m@example.com",
//       "phone": "+6666666666",
//       "organization": "Tech Experts",
//       "password": "hashedPassword6",
//       "role": "user"
//     },
//     {
//       "name": "Grace Lee",
//       "email": "grace.l@example.com",
//       "phone": "+7777777777",
//       "organization": "Innovation Hub",
//       "password": "hashedPassword7",
//       "role": "user"
//     },
//     {
//       "name": "Hank Johnson",
//       "email": "hank.j@example.com",
//       "phone": "+8888888888",
//       "organization": "Tech Ventures",
//       "password": "hashedPassword8",
//       "role": "user"
//     },
//     {
//       "name": "Isabel Garcia",
//       "email": "isabel.g@example.com",
//       "phone": "+9999999999",
//       "organization": "Digital Creations",
//       "password": "hashedPassword9",
//       "role": "admin"
//     },
//     {
//       "name": "Jack Robinson",
//       "email": "jack.r@example.com",
//       "phone": "+1010101010",
//       "organization": "Innovative Designs",
//       "password": "hashedPassword10",
//       "role": "user"
//     }
//   ]
 export class User {
    name: string;
    email: string;
    phone: number;
    organization: string;
    password: string;
    role: string;
    constructor(name:string, email:string, phone:number, organization:string, password:string, role:string) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.organization = organization;
      this.password = password;
      this.role = role;
    }
  }