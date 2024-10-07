pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'git@github.com:timuela/timuela.github.io.git'
            }
        }
    }
}
