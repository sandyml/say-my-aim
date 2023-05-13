class User < ApplicationRecord
 has_secure_password

 validate :username, presence: true, uniqueness: true
end
