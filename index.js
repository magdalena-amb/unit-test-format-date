const formatDate = (timeInSeconds) => {

    let time = timeInSeconds;

    if (time === '' || time === 0 || time === undefined ) {
        return '0s';
    }

    else if (time < 60) {
        return `${time}s`;
    }

    else if (time >= 60 && time < 3600) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        if (seconds === 0) {
            return `${minutes}m`;
        } else return `${minutes}m ${seconds}s`;
    }

    else if (time >= 3600) {
        const hours = Math.floor(time/3600); 
        const minutes = Math.floor(time % 3600 / 60);
        const seconds = Math.floor(time % 3600 % 60);

        if (minutes === 0 && seconds === 0 ) {
             return `${hours}h`;

        } else if (minutes === 0 ) {
            return `${hours}h ${seconds}s`;

        } else if (seconds === 0) {
            return `${hours}h ${minutes}m`;
        }
        else {
        return `${hours}h ${minutes}m ${seconds}s`;
        }
    }
}

  module.exports = formatDate;

