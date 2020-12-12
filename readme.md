# User Registration and Login System - RestFul API

This Restful API contains End Points to Register the User and then authenciate the user, while generating the JSON Token.
The following libraries have been used for the purpose of encrypting the password and creating the JSON Tokens as well.

- Bcrypt
- JsonWebTokn
- Mongoose

There are following two End Points that can be consumed by the Front-End for Further Working Purpose.
| Method | End Point|
|--|--|
| POST | /user/signup |
| POST | /user/login |

**_Have to Configure the Connection URL for the MongoDB connection._**
