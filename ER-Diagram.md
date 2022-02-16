```mermaid
erDiagram
  Users {
    string id PK
    string name
  }
  Languages {
    string id PK
    string name
  }
  UserChallenges {
    string id PK
    string user_id FK
    string challenge_id FK
    string language_id FK
    int score
    string testcase_answer
    string status
  }
  UserChallengeTestCases {
    string id PK
    string user_challenge_id FK
    string testcase_id
    string state
  }
  Chapters {
    string id PK
    string title
  }
  Challenges {
    string id PK
    string chapter_id FK
    string title
    string description
    string difficulty
    string level
  }
  TestCases {
    string id PK
    string challenge_id FK
    string input
    string output
  }
  Users }|--o{ UserChallenges : submit
  Languages }|--o{ UserChallenges : submit
  UserChallenges ||--|{ UserChallengeTestCases : check
  Chapters ||--|{ Challenges : create
  Challenges ||--|{ TestCases : create
  Challenges ||--o{ UserChallenges : submit
  TestCases ||--o{ UserChallengeTestCases : validate
```
