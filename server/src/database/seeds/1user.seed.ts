import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateUser implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into('Users')
            .values([
                { email: 'kimcoding@gmail.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'kimcoding', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%84%E1%85%A9%E1%84%80%E1%85%A1%E1%84%89%E1%85%B3.jpeg',statusMessage:'동해물과 백두산이'},
                { email: 'parkhacker@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'parkhacker', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg',statusMessage:'마르고 닳도록'},
                { email: 'qwp1216@hanmail.net', password: null, nickname: '정권진', loginMethod: 1, totalFollower: 27, totalFollowing: 19 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A5%E1%84%90%E1%85%A5%E1%84%91%E1%85%AE%E1%86%AF.jpeg',statusMessage:'하느님이 보우하사'},
                { email: 'seoul@gmail.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: '서울토박이', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A3%E1%84%83%E1%85%A9%E1%84%85%E1%85%A1%E1%86%AB.jpeg',statusMessage:'우리나라 만세'},
                { email: 'abcd@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'abcd', loginMethod: 0, totalFollower: 1, totalFollowing: 0 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8C%E1%85%A9%E1%86%AB%E1%84%90%E1%85%AE.jpeg',statusMessage:'무궁화 삼천리 화려강산'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh7', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh8', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh9', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh10', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh11', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh12', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh13', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh14', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh15', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh16', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh17', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh18', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh19', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh20', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh21', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh22', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh23', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh24', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh25', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh26', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh27', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh28', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh29', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
                { email: 'efgh@naver.com', password: "$2b$10$BrgDGgx5SaIsFAVX7JlYEuCiBSjSPSKS9C6.GDhBuVfLgogD08UIi", nickname: 'efgh30', loginMethod: 0, totalFollower: 0, totalFollowing: 1 ,profileImage:'https://ootd13image.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%8E%E1%85%B2.jpeg',statusMessage:'대한 사람 대한으로 길이 보전하세'},
            ])
            .execute()
    }
}