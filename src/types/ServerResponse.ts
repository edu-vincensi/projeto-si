type NotFound = "UserNotFound" 

type Existing = "ExistingEmail" |
  "ExistingName" 

export type ServerResponse = "Success" |
  "BadRequest" |
  "ServerError" |
  "AxiosError" |
  "WrongCredentials" |
  "Unauthorized" |
  "Forbidden" |
  Existing |
  NotFound