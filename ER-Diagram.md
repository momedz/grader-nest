```mermaid
erDiagram
  Users {
    long id
    string name
  }
  UserChallenges {
    long id
    long user_id
    long challenge_id
    long score
    string testcase_answer
  }
  UserChallengeTestCases {
    long id
    long user_challenge_id
    long testcase_id
    string state
  }
  Chapters {
    long id
    string title
  }
  Challenges {
    long id
    long chapter_id
    string title
    string description
    string language
    string level
  }
  TestCaseExamples {
    long id
    long challenge_id
    string input
    string output
  }
  TestCases {
    long id
    long challenge_id
    string input
    string output
  }
  User }0--0{ UserChallenges
```
