/**
 * Interface representing a data source for managing blacklisted tokens.
 */
export interface BlacklistTokenDataSource {
    /**
     * Adds a token to the blacklist.
     * 
     * @param tokenPayload - The payload of the token to be added to the blacklist.
     * @returns The result of the operation.
     */
    addToken(tokenPayload: any): any;

    /**
     * Checks if a token is blacklisted.
     * 
     * @param token - The token to check.
     * @returns A promise that resolves to a boolean indicating whether the token is blacklisted.
     */
    isTokenBlacklisted(token: string): Promise<boolean>;
}
