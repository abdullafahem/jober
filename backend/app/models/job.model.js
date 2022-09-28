module.exports = (sequelize, Sequelize) => {
    const Job = sequelize.define("job", {
        position: {
            type: Sequelize.STRING
        },
        company: {
            type: Sequelize.STRING
        },
        job_location: {
            type: Sequelize.STRING
        },
        job_type: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.INTEGER
        }
    });

    return Job;
}