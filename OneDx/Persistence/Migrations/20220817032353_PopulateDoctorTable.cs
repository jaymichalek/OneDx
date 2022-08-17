using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OneDx.Migrations
{
    public partial class PopulateDoctorTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Doctors",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "7ad97f1b-45b8-4af1-a2ca-42e52a0de901", 0, "907332dc-d4f2-4cc1-bebe-0862c16f34f2", null, false, "Joe", "Webber", false, null, null, null, null, null, false, "7e7b993e-eccc-4850-885b-39959000b565", false, null });

            migrationBuilder.InsertData(
                table: "Doctors",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "948308cb-614d-47e2-be44-83c4db590db3", 0, "2118db73-ac8f-43f5-87ef-496023314135", null, false, "Mark", "Adams", false, null, null, null, null, null, false, "33fa4dbc-3934-4833-a07f-8dab05e6a0ee", false, null });

            migrationBuilder.InsertData(
                table: "Doctors",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "969cd542-1552-4f06-9c5d-b1c7577d57dc", 0, "75d1a9ca-c113-4b45-927b-5d8df695a219", null, false, "John", "Smith", false, null, null, null, null, null, false, "80eb5da4-2e51-4874-8c6e-f9ab0be588fd", false, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "Id",
                keyValue: "7ad97f1b-45b8-4af1-a2ca-42e52a0de901");

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "Id",
                keyValue: "948308cb-614d-47e2-be44-83c4db590db3");

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "Id",
                keyValue: "969cd542-1552-4f06-9c5d-b1c7577d57dc");
        }
    }
}
