class User < ApplicationRecord
 has_secure_password

 validates :username, presence: true, uniqueness: true
 
 has_many :messages
end


# Tentative: Add Emojis? Add Column 