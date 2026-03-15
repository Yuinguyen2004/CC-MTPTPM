const ROLES = Object.freeze({ ADMIN: 'admin', STAFF: 'staff' });

function createUser({ username, password, email, fullName, phone, role = ROLES.STAFF }) {
  return Object.freeze({
    getUsername: () => username,
    getPassword: () => password,
    getEmail: () => email,
    getFullName: () => fullName,
    getPhone: () => phone,
    getRole: () => role,
    toObject: () => ({ username, password, email, fullName, phone, role }),
  });
}

module.exports = { createUser, ROLES };
