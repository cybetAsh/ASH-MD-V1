const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SADIYA-MD=0cBRBDjQ#AtVvxj8vJsypb7Qt5PgJmJ0OAgQ_9dxYrZLcvmuDCBE', //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || 'cybetAsh', //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || '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', //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || 'ASH-MD-DATABASE' //Bot Database Repo Name
};
