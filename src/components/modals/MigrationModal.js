import React, { Component } from "react";
import MigrationDrawing from "../../assets/images/maker-migration.png";
import EventBus from "../../lib/EventBus";
import { migrateMakerDao } from "../../lib/Actions";

export default class MigrationModal extends Component {
    onMigrate = async () => {
        EventBus.$emit("migration-started");
        EventBus.$emit("close-modal");
        await migrateMakerDao();
        EventBus.$emit("migration-completed");
        EventBus.$emit("get-user-info");
    };

    render() {

        return (
            <div className="migrate">
                <h2>Migrate your CDP</h2>
                <div className="migration-drawing">
                    <img src={MigrationDrawing} />
                </div>
                <button className="migration-btn" onClick={this.onMigrate}>
                    Migrate
                </button>
            </div>
        )
    }
}
