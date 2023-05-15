class User < ApplicationRecord
 has_secure_password

 validates :username, presence: true, uniqueness: true
 validates :password, length: { in: 6..10 } 
 
 has_many :messages
end


# Tentative: Add Emojis? Add Column 